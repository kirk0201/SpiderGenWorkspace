const mysql = require('mysql');
const Define = require('./defines');

const pool = mysql.createPool({
    
    host : Define.SERVER_STATE == 1 ? '121.190.229.204' : '27.102.71.242',  // 1: 테스트, 2:운영
    port : Define.SERVER_STATE == 1 ? 3306 : 3308,        
    password : Define.SERVER_STATE == 1 ? 'cool74' : 'cool@cool47$&',
    user : 'db_asoo',            
    database: 'spidercob_db',
    connectionLimit : 50,
    waitForConnections : true,      //풀에 여유 커넥션이 없는 경우 대기 여부        
    supportBigNumbers : true,       //bigInt 사용 여부
    bigNumberStrings : true,
    multipleStatements : true       //다중쿼리 실행 여부

});

const _dbm = module.exports =  {};


function tranErrorHandle(con, callback, err)
{
	if(err) console.log(err);

    con.rollback();
    con.release();
    callback(null);
}

function releaseAndCallback(con, callback, results, err)
{
	con.release();

	//오류 발생
	if(err) 
	{
		console.log(err);
		callback(null);
	}
	else 
	{
		callback(results);
	}
}


_dbm.loginUser = (userId, pwd, callback) => {

    pool.getConnection((err, con) => {

        if(err)
        {
            callback(null);
            return;
        } 
        
        new Promise((resolve, reject) => {
            con.query(
                'SELECT * FROM users WHERE userId=? AND pwd = SHA2(?, 512);',
                [userId, pwd],
                (err, results) => {err ? reject(err) : resolve(results); }
            );    
        })
        .then((data) => {
            releaseAndCallback(con, callback, data, err);
            return;
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, null, err);            
            console.log(err);
        });

    });

};


_dbm.checkUserId = (userId, callback) => {

    pool.getConnection((err, con) => {
        if(err)
        {
            callback(null);
            return;
        } 
        
        new Promise((resolve, reject) => {

            con.query(
                'SELECT * FROM users WHERE userId=?;',
                [userId],
                (err, results) => {err ? reject(err) : resolve(results); }
            );
    
        })
        .then((data) => {
            releaseAndCallback(con, callback, data, err);
            return;
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, null, err);            
            console.log(err);
        });

    });

};




//회원가입
_dbm.registUser = (userId, pwd, callback) => {

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }
        
        new Promise((resolve, reject) => {

             //회원가입 처리
             con.query(
                'INSERT INTO users(userId, pwd) VALUES(?, SHA2(?, 512));',
                [userId, pwd],
                (err, results) => {
                    err ? reject(err) : resolve(results);            
                }
            );
    
        })        
        .then((data) => {    
            releaseAndCallback(con, callback, data, err);
            return;        
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, null, err);            
            
        });

    });

};


//채팅방생성
_dbm.createRoom = (blockData, callback) => {

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }

        //채팅방생성
        new Promise((resolve, reject) => {

            console.log('INSERT INTO rooms;');

            con.query(
                'INSERT INTO rooms(roomKey, hostUser, roomPwd, roomTitle, roomType) VALUES(?, ?, ?, ?, ?);', 
                [blockData.roomKey , blockData.hostUser, blockData.roomPw, blockData.roomName, blockData.roomType], 
                (err, results) => { err ? reject(err) : resolve(results); }
            );
    
        })
        .then((data) => {    
            
            console.log(blockData);
            releaseAndCallback(con, callback, data, err);
            return;            
        })
        .catch((err) => {   
            console.log(err);
            releaseAndCallback(con, callback, null, err);            
            return; 
        });

    });

};



//방참여 
_dbm.insertRoomInUser = (roomKey, userId, callback) => {

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }

        con.beginTransaction(function(err) 
        {
            if(err) 
            {
                return tranErrorHandle(con, callback, err);
            }

            new Promise((resolve, reject) => {

                con.query(
                    'INSERT INTO roomInUsers(roomKey, userId) VALUES(?, ?);',
                    [roomKey, userId],
                    (err, results) => {
                        err ? reject(err) : resolve(results);            
                    }
                );
        
            })        
            .then((data) => {    
    
                return new Promise((resolve, reject) => {
                    con.query(
                        'UPDATE rooms SET sTime = TIME(CURRENT_TIMESTAMP) WHERE roomKey = ?;',
                        [roomKey],
                        (err, results) => {
                            err ? reject(err) : resolve(results);            
                        }
                    );        
                });
    
            })
            .then((data) => {    
                
                con.commit(function(err) 
                {
                    if(err) 
                    {
                        return tranErrorHandle(con, callback, err);
                    }

                    releaseAndCallback(con, callback, data, err);
                });
                return;        
            })
            .catch((err) => {   
                return tranErrorHandle(con, callback, err);                        
            });

        });

    });

};


//로그저장
_dbm.registLogInfo = (roomKey, userId, info, callback) => {

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }
        
        new Promise((resolve, reject) => {

             con.query(
                'INSERT INTO consLogs(roomKey, userId, info) VALUES(?, ?, ?);',
                [roomKey, userId, info],
                (err, results) => {
                    err ? reject(err) : resolve(results);            
                }
            );
    
        })        
        .then((data) => {    
            releaseAndCallback(con, callback, data, err);
            return;        
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, null, err);            
            
        });

    });

};



//상담방 나가기
_dbm.roomOut = (roomKey, callback) => {

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }
        
        new Promise((resolve, reject) => {

             con.query(
                'UPDATE rooms SET eTime = TIME(CURRENT_TIMESTAMP) WHERE roomKey = ? AND eTime IS NULL;',
                [roomKey],
                (err, results) => {
                    err ? reject(err) : resolve(results);            
                }
            );
    
        })        
        .then((data) => {    
            releaseAndCallback(con, callback, data, err);
            return;        
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, null, err);                        
        });

    });

};


//상담목록
_dbm.getConsultList = (curUserId, blockData, callback) => {


    let WHERE = '(t1.hostUser = ? OR t2.userId = ?) ',
        DATAS = [curUserId, curUserId];

    if(blockData.lastRoomKey)
    {
        WHERE += 'AND t1.roomKey < ? ';
        DATAS.push(blockData.lastRoomKey);
    }
    
    
    if(blockData.isAllDay == 'Y')
    {
        WHERE += 'AND t1.regDate < ? ';
        DATAS.push(blockData.eDate + ' 23:59:59');
    }
    else
    {
        WHERE += 'AND t1.regDate BETWEEN ? AND ? ';
        DATAS.push(blockData.sDate + ' 00:00:00');
        DATAS.push(blockData.eDate + ' 23:59:59');
    }
    
    //검색어가 있을 경우
    if(blockData.sText)
    {
        WHERE += ' AND ';
        if(blockData.sType)
        {
            WHERE += blockData.sType == 'userId' ? 't2.' : 't1.';
            WHERE += blockData.sType + ' LIKE ? ';
            DATAS.push('%'+blockData.sText+'%');
        }
        else
        {
            WHERE += ' (t1.hostUser LIKE ? OR  t1.roomTitle LIKE ? OR t2.userId LIKE ?) ';
            DATAS.push('%'+blockData.sText+'%', '%'+blockData.sText+'%', '%'+blockData.sText+'%');
        }
    }

    let STRSQL = [
        "SELECT ",
            "t1.roomKey, t1.roomTitle, t1.hostUser, LEFT(DATE(t1.regDate), 10) AS regDate, IFNULL(t1.sTime, '') AS sTime, IFNULL(t1.eTime, '') AS eTime, ",
	        "IFNULL(t2.userId, '') AS userId ",
        "FROM ",
            "rooms t1 ",
            "LEFT OUTER JOIN roomInUsers t2 ON t1.roomKey = t2.roomKey ",            
        "WHERE ",    
            WHERE,
        "ORDER BY ",
            "t1.roomKey DESC ",
        "LIMIT 20;"
    ].join('');

//console.log(STRSQL);

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }
        
        new Promise((resolve, reject) => {

             con.query(STRSQL, DATAS,
                (err, results) => {
                    err ? reject(err) : resolve(results);            
                }
            );
    
        })        
        .then((data) => {   
            releaseAndCallback(con, callback, data, err);
            return;        
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, null, err);            
            
        });

    });

};


//상담상세목록
_dbm.getConsultDetailList = (roomKey, lastIdx, callback) => {

    let STRSQL = [
            "SELECT ",
                "idx, roomKey, LEFT(regDate, 19) AS regDate, CONCAT(userId, '님 ', info) AS info ",
            "FROM ",
                "consLogs ",
            "WHERE ",
                "roomKey = ? ",
                !lastIdx ? "" : "AND idx < ? ",
            "ORDER BY ",
                "idx DESC ",
            "LIMIT 20;"
        ].join('');

        
    let DATAS = !lastIdx ? [roomKey] : [roomKey, lastIdx];

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }
        
        new Promise((resolve, reject) => {

             con.query(STRSQL, DATAS,
                (err, results) => {
                    err ? reject(err) : resolve(results);            
                }
            );
    
        })        
        .then((data) => {   
            releaseAndCallback(con, callback, data, err);
            return;        
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, null, err);            
            
        });

    });

};




//메시지저장
_dbm.regChatMessage = (roomKey, userId, msgType, msg, callback) => {

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }
        
        new Promise((resolve, reject) => {

             con.query('INSERT INTO chatmsg(roomKey, userId, msgType, msg) VALUES(?, ?, ?, ?);', 
                [roomKey, userId, msgType, msg],
                (err, results) => {
                    err ? reject(err) : resolve(results);            
                }
            );
    
        })        
        .then((data) => {   
            releaseAndCallback(con, callback, true, err);
            return;        
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, false, err);            
            
        });

    });

};


_dbm.getChatMessageList = (roomKey, lastMsgIdx, callback) => {

console.log(lastMsgIdx);

    let STRSQL = [
        "SELECT ",
            "t1.msgIdx, t1.roomKey, t1.userId, t1.msgType, t1.msg, LEFT(t1.regDate, 19) AS regDate, ",
            "(CASE WHEN t1.userId = t2.hostUser THEN 'Y' ELSE 'N'END) AS isHostUser ",
        "FROM ",
            "chatmsg t1 ",
            "LEFT OUTER JOIN rooms t2 ON t1.roomKey = t2.roomKey ",
        "WHERE ",
            "t1.roomKey = ? ",
            !lastMsgIdx ? "" : "AND t1.msgIdx < ? ",
        "ORDER BY ",
            "t1.msgIdx DESC ",
        "LIMIT 20;"
    ].join('');

    console.log(STRSQL);

    let DATAS = !lastMsgIdx ? [roomKey] : [roomKey, lastMsgIdx];

    pool.getConnection((err, con) => {
    
        if(err) 
        {
            callback(null);
            return;
        }
        
        new Promise((resolve, reject) => {

             con.query(STRSQL,  DATAS,
                (err, results) => {
                    err ? reject(err) : resolve(results);            
                }
            );
    
        })        
        .then((data) => {   
            releaseAndCallback(con, callback, data, err);
            return;        
        })
        .catch((err) => {   
            releaseAndCallback(con, callback, false, err);            
            
        });

    });

};





/*

_dbm.checkMember = function(uid, loginKey, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        

        if(Define.SERVER_STATE)
        {
            con.query('SELECT * FROM player_info left outer JOIN score_info on player_info.uid = score_info.uid left outer JOIN bd_book_cat1 on bd_book_cat1.bd_bk_cat1no = player_info.textBook where loginKey = ?', [loginKey], function(err, results)
            {
                releaseAndCallback(con, callback, results, err);
            });
        }
        else
        {
            con.query('SELECT * FROM player_info INNER JOIN score_info on player_info.uid = score_info.uid where player_info.uid = ? and loginKey = ?', [uid, loginKey], function(err, results)
            {
                releaseAndCallback(con, callback, results, err);
            });
        }
    });
};

_dbm.removeKeyAfterLogin = function(loginKey, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        con.query('UPDATE player_info SET loginKey = ? WHERE loginKey = ?', [ '', loginKey ], function (err, results) 
        {
            releaseAndCallback(con, callback, results, err);
        
        });
    });
};

_dbm.getMemberInfo = function(uid, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.query('select * from player_info where uid = ?', [uid], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

_dbm.updateMannerScore = function(uid, score, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.query('update player_info set mannerScore = ? where uid = ?', [score, uid], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

_dbm.storeGiboData = function(headerData, bodyData, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.beginTransaction(function(err) 
        {
            if(err) 
            {
                return tranErrorHandle(con, callback, err);
            }

            con.query('insert into gibo_header set ?', headerData, function (err, results) 
            {
                if(err) 
                {
                    return tranErrorHandle(con, callback, err);
                }

                //console.log(bodyData);
        
                con.query('insert into gibo_body values (LAST_INSERT_ID(), ?)', [ bodyData ], function (err, results) 
                {
                    if(err) 
                    {
                        return tranErrorHandle(con, callback, err);
                    }
                
                    con.commit(function(err) 
                    {
                        if(err) 
                        {
                            return tranErrorHandle(con, callback, err);
                        }
						
						con.release();
                        callback(true);
                    });
                });
            });

        });
    });
};

_dbm.getGiboData = function(uid, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.query('select * from gibo_body where uid = ?', [uid], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

_dbm.getGiboList = function(uid, page, count, lineType, gameType, resultType, search, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        //게임 타입이 8, 9 인 경우 기보정보를 저장해야 하는지 ?
        //저장해야 된다면 테이블을 분리해도 되는지 확인
        var where = '(gameType != 8 and gameType != 9)';

        //if(nextKey) where += ' and gameDate < "' + nextKey + '"';

        if(lineType) where += ' and lineType = ' + lineType;

        if(gameType) where += ' and gameType = ' + gameType;

        if(search) where += ' and (wName like "%' + search + '%" or bName like "%' + search + '%" or uid like "%' + search + '%" or gameDate like "%' + search + '%")';

        if(uid) 
        {
            where += ' and (bUid = ' + uid + ' or wUid = ' + uid + ')';

            switch(resultType)
            {
                //승
                case 4:
                    where += ' and ((bUid = ' + uid + ' and gameResult > 0) or (wUid = ' + uid + ' and gameResult < 0))';
                break;
                //패
                case 2:
                    where += ' and ((bUid = ' + uid + ' and gameResult < 0) or (wUid = ' + uid + ' and gameResult > 0))';
                break;
                //무
                case 1:
                    where += ' and (gameResult = 0)';
                break;
                //패, 무
                case 3:
                    where += ' and ((bUid = ' + uid + ' and gameResult <= 0) or (wUid = ' + uid + ' and gameResult >= 0))';
                break;
                //승, 무
                case 5:
                    where += ' and ((bUid = ' + uid + ' and gameResult >= 0) or (wUid = ' + uid + ' and gameResult <= 0))';
                break;
                //승, 패
                case 6:
                    where += ' and (gameResult != 0)';
                break;
            }
        }
           
        con.query('SELECT COUNT(*) FROM gibo_header where '+ where, null, function (err, res) 
        {
            if(err) 
            {
                releaseAndCallback(con, callback, res, err);
                return;
            }
            
            var totalCnt = res[0]['COUNT(*)'];
            var startCnt = (page - 1) * count;
            con.query('select R1.* FROM(SELECT * FROM gibo_header where '+ where +' order by gameDate desc) R1 LIMIT ? OFFSET ?', [ count, startCnt ], function (err, results) 
            {
                releaseAndCallback(con, callback, [results, totalCnt], err);
            });
        });
    });
};

//게임 승패 등 플레이어의 게임 결과 정보 저장
_dbm.updateRating = function(wInfo, lInfo, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.beginTransaction(function(err) 
        {
            if(err) 
            {
                return tranErrorHandle(con, callback, err);
            }

            con.query('update player_info set rateScore = ? where uid = ?', [ wInfo.rateScore, wInfo.uid ], function (err, results) 
            {
                if(err) 
                {
                    return tranErrorHandle(con, callback, err);
                }

                con.query('update player_info set rateScore = ? where uid = ?', [ lInfo.rateScore, lInfo.uid ], function (err, results) 
                {
                    if(err) 
                    {
                        return tranErrorHandle(con, callback, err);
                    }
                
                    con.commit(function(err) 
                    {
                        if(err) 
                        {
                            return tranErrorHandle(con, callback, err);
                        }
						
						con.release();
                        callback(true);
                    });
                });
            });

        });
    });

};

//게임 승패 등 플레이어의 게임 결과 정보 저장
_dbm.updateRecord = function(wInfo, lInfo, isDraw, line, callback)
{
    if(line == 1) line = 'book';
    if(line == 2) line = 'battle';
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.beginTransaction(function(err) 
        {
            if(err) 
            {
                return tranErrorHandle(con, callback, err);
            }

            var winField = (isDraw ? "draw_" : "vic_") + line + ' = ?',
                loseField = (isDraw ? "draw_" : "def_") + line + ' = ?',
                leagueField = ', league_' + line + ' = ?';

            //if(line==19 || line=='book') leagueField = '';

            con.query('update score_info set '+ winField + leagueField + ' where uid = ?', [ wInfo.victory, wInfo.leagueScore, wInfo.uid ], function (err, results) 
            {
                if(err) 
                {
                    return tranErrorHandle(con, callback, err);
                }

                con.query('update score_info set '+ loseField + leagueField + ' where uid = ?', [ lInfo.defeat, lInfo.leagueScore, lInfo.uid ], function (err, results) 
                {
                    if(err) 
                    {
                        return tranErrorHandle(con, callback, err);
                    }
                
                    con.commit(function(err) 
                    {
                        if(err) 
                        {
                            return tranErrorHandle(con, callback, err);
                        }
                
						con.release();
                        callback(true);
                    });
                });
            });

        });
    });

};

_dbm.getRecentRecord = function(uid, line, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        if(line == 1)
        {
            con.query('SELECT recent_book FROM score_info where uid = ?', [uid], function(err, results)
            {
                releaseAndCallback(con, callback, results, err);
            });
        }
        else
        {
            con.query('SELECT bUid, gameResult FROM gibo_header where (bUid = ? or wUid = ?) and lineType = ? ORDER BY gameDate DESC LIMIT 0, 20', [uid, uid, line], function(err, results)
            {
                releaseAndCallback(con, callback, results, err);
            });
        }
    });
};

_dbm.getRecentScore = function(uid, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        con.query('SELECT bUid, gameResult FROM gibo_header where (bUid = ? or wUid = ?) ORDER BY gameDate DESC LIMIT 0, 10', [uid, uid], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};


//####
//누가 작업 했는지 체크, 오류 설명해 주기
_dbm.sendMemo = function(sendData, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
		
        sendData.readYn = 0;
        con.query('insert into memo set ?', sendData, function (err, results) 
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

_dbm.getMemoInfo = function(uid, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        con.query(
            'select A.uid, B.userName, A.title, A.regDate, A.readYn ' +
            'from memo A inner join player_info B ' +
            'on A.sndId = B.uid ' +
            'where A.rcvId = ? ' +
            'ORDER BY A.uid desc LIMIT 0, 20', [uid], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

//####
//여기도 설명
_dbm.getMemoMessage = function(uid, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        con.query(
            'select A.uid, B.userName, A.title, A.message, A.regDate ' +
            'from memo A inner join player_info B ' +
            'on A.sndId = B.uid ' +
            'where A.uid = ?', [uid], function(err, results)
        {
            //오류 발생
            if(err) 
            {
                console.log(err);
				
				con.release();
                callback(null);
            }
            else 
            {
                con.query('update memo set readYn = 1 where uid = ?', [uid], function(err, results)
                {
					releaseAndCallback(con, callback, results, err);
                });
            }
        });
    });
};

_dbm.removeMemo = function(uidArr, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
		
        var queryStr = 'delete FROM memo where ';
        //console.log(uidArr);
        for(var i in uidArr)
        {
            if(i != 0) queryStr += ' or '
            queryStr += 'uid = '+uidArr[i].uid;
        }

        con.query(queryStr, [], function (err, results) 
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

//친구악당 조회
_dbm.getRelationList = function(uid, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        con.query('SELECT * FROM relation_info where ownerId = ?', [uid], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

//####
//친구악당등록
_dbm.addRelationList = function(uid, data, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        queryStr = 'INSERT INTO relation_info (ownerId, otherId, relation) VALUES (?, ?, ?)';
        queryArr = [uid, data[0], data[1]];

		con.query('SELECT * FROM relation_info where ownerId = ? AND otherId = ?', [uid, data[0]], function(err, results)
		{
			//오류 발생
			if(err) 
			{
				console.log(err);
				
				con.release();
				callback(null);
			}
			else 
			{
				if(results.length > 0 && results[0].relation == data[1]) 
				{
					con.release();
					callback(null);
					return;
				}
				else if(results.length > 0 && results[0].relation != data[1]) 
				{
					queryStr = 'UPDATE relation_info SET relation = ? WHERE ownerId = ? AND otherId = ?';
					queryArr = [data[1], uid, data[0]];
				}

				con.query(queryStr, queryArr, function(err, results)
				{
					releaseAndCallback(con, callback, true, err);
				});
			}
		});
        
    });
};

//####
//친구악당등록삭제
_dbm.removeRelationList = function(uid, data, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        queryStr = 'DELETE FROM relation_info WHERE ownerId = ? AND otherId = ? AND relation = ?';
        queryArr = [uid, data[0], data[1]];
        
        con.query(queryStr, queryArr, function(err, results)
        {
			releaseAndCallback(con, callback, true, err);
        });
    });
};


//친구 접속 알리기 위한 정보.(접속할떄 나를 친구로 등록한 유저에게 알림)
_dbm.getFollowerList = function(uid, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        con.query('SELECT * FROM relation_info where otherId = ?', [uid], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

//비매너유저신고
_dbm.reportBad = function(_data, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        con.query('insert into notify_bad set ?', [_data], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

//대화명으로 아이디
_dbm.idForName = function(_data, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        //console.log(_data)
        con.query('SELECT uid FROM player_info WHERE userName = ?', [_data], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

//아이디로 대화명
_dbm.nameForId = function(_data, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }
        
        //console.log(_data)
        con.query('SELECT userName FROM player_info WHERE uid = ?', [_data], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

//교재 변경 및 전적 초기화.
_dbm.updateTextBook = function(uid, data, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.beginTransaction(function(err) 
        {
            if(err) 
            {
                return tranErrorHandle(con, callback, err);
            }

            con.query('UPDATE player_info SET textBook = ? WHERE uid = ?', [data.textBook, uid], function(err, results)
            {
                if(err) 
                {
                    return tranErrorHandle(con, callback, err);
                }

                con.query('UPDATE score_info SET vic_book = 0, def_book = 0, draw_book = 0, recent_book = ? WHERE uid = ?', [ '', uid ], function (err, results) 
                {
                    if(err) 
                    {
                        return tranErrorHandle(con, callback, err);
                    }
                
                    con.commit(function(err) 
                    {
                        if(err) 
                        {
                            return tranErrorHandle(con, callback, err);
                        }
						
						con.release();
                        callback(true);
                    });
                });
            });

        });
    });

};

//교재명 받아오기
_dbm.getTextBookName = function(code, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.query('select bd_bk_cat1name from bd_book_cat1 where bd_bk_cat1no = ?', [code], function(err, results)
        {
			releaseAndCallback(con, callback, results, err);
        });
    });
};

//교재별 최근전적 저장.
_dbm.saveRecentTextBook = function(uid, str, callback)
{
    pool.getConnection(function(err, con)
    {
        if(err) 
        {
            callback(null);
            return;
        }

        con.query('UPDATE score_info SET recent_book = ? WHERE uid = ?', [ str, uid ], function (err, results) 
        {
            releaseAndCallback(con, callback, results, err);
        });
    });
}

*/
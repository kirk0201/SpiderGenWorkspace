/**
 * @author asoocool
 */

var asoo = require('../lib/asooworld');


//exports only one constructor function
module.exports = ChatHouse;


//--------------------------------------------------------------------------------//
//  class GameHouse extends ARoom
//--------------------------------------------------------------------------------//

function ChatHouse()
{
    asoo.ArrayHouse.call(this);
    
}

asoo.extendsClass(ChatHouse, asoo.ArrayHouse);


//--------------------------------------------------------------------------------------





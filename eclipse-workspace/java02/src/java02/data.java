package java02;

import java.util.Scanner;

public class data {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// char는 영,한 모두 한글자만 가능하며 '따옴표를 사용하고
		// String은 긴 문자열도 가능하며 "쌍따옴표로 표현한다
		char var1 = 'ㅇ';
		String var2 = "안드로이드 스튜디오";
		
//		정수형
		byte var3 = 7; 			// -128 ~ +127 까지 숫자 가능
		short var4 = -32768;	// -32768 ~ +32767 가능
		int vart5 = 2140000000;	// -21억 ~ +21억 가능
		long var6 = 214099999; 	// 여러숫자 입력 가능
		
//		실수형
		float var7 = 0.5f;		// 소수점 선언 후 f를 붙인다 4바이트까지 가능
		double var8 = 0.00005;	// 8바이트까지 가능하며 추가적으로 아무것도 안붙여도 가능
		
		boolean isStart = false; // true or false를 입력하여 조건식에 사용
		
//		System.out.println(var1);
//		System.out.println(var2);
		
/*		배열 및 반복문 		*/
		String arr[] = {"사과","레몬", "딸기","배","수박"};
//		
//		for(byte i =0; i< arr.length; i++) {
//			System.out.println(arr[i]);
//		}
//		
//		byte i = 0;
//		while(i < arr.length) {
//			System.out.println(arr[i]);
//			i++;
//		}
		
/* 		Scanner를 활용한 반복문 활용 				*/
//		Scanner sc = new Scanner(System.in);
//		System.out.println("숫자를 입력하세요!");
//		int i = sc.nextInt();
//		
//		while(i < arr.length) {
//		System.out.println(arr[i]);
//		i++;
//	}
		
/*		다양한 배열 선언	*/
		int arrayInt[] = new int[10];
		for(int i = 0; i < arrayInt.length; i++) {
			System.out.println(i);
		}
		
		int arrayInt2[] = {1,3,5,7,9};
		for(int i = 0; i < arrayInt2.length; i++) {
			System.out.println(arrayInt2[i]);
		}
		
		String arrayStr[] = {"하늘","땅","별","태양"};
		for(int i = 0; i < arrayStr.length; i++) {
			System.out.println(arrayStr[i]);
		}
		
/*		try-catch 		*/
		int arrayInt10[] = new int[10];
		
		try {
			arrayInt[9] = 12;
		}	
		catch (Exception e) {
			e.printStackTrace();  // 실제 에러문 출력
			System.out.println("배열 범위를 초과했습니다");
		}
		
	}

}

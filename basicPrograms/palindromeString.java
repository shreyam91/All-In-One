public class palindromeString {
    public static void main(String[] args) {
        String str = "dipashree";
        boolean isPalindrome = true;

        int length = str.length();
        for(int i=0; i<length/2; i++){
            if(str.charAt(i) != str.charAt(length-i-1)){
                isPalindrome = false;
                break;
            }
        }

        if(isPalindrome){
            System.out.println( str + " is a palindrome.");
        }else{
            System.out.println(str + " is not a palindrome.");
        }
    }
}


// r a c e c a r 
// d i p a s h r e e
// dipashree is not a palindrome.

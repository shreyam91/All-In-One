public class reverseString {
    public static void main(String[] args) {
        String str = "Classmate";

        // Approach 1:
        String reverse = new StringBuilder(str).reverse().toString();
        System.out.println(" Reversed String: " + reverse);


        // Approach 2:
        int length = str.length(); //optional
        String reversed = "";

        for(int i = length-1 ;i>= 0; i--){
            reversed += str.charAt(i);
        }
        System.out.println(" Reversed String: " + reversed);

    }
}


// Reversed String: etamssalC
public class ReverseNumber {
    public static void main(String[] args) {
        int number = 1234;

        System.out.println("Before reverse " + number);

        int reversed = 0;
        while( number != 0){
            int digit = number % 10;
            reversed = reversed *10 + digit;
            number /= 10;
        }

        System.out.println("After reverse " + reversed);
    }
}


// Before reverse 1234
// After reverse 4321
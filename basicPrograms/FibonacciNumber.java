public class FibonacciNumber {

    public static void main(String[] args) {
        int n = 10;

        int firstTerm = 0;
        int secondTerm = 1;

        for(int i =1; i<= n; i++){
            System.out.print(firstTerm + " ");
            int nextTerm = firstTerm + secondTerm;
            firstTerm = secondTerm ;
            secondTerm = nextTerm;
        }

    }
}


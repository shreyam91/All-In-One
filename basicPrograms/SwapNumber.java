public class SwapNumber {
    public static void main(String[] args) {
        int a=10, b =12;
        System.out.println("Value before swapping " + a + " " + b);

        int c = a; 
        a = b;
        b = c;

        System.out.println("Value after swapping " + a + " " + b);
    }
}


// Value before swapping 10 12
// Value after swapping 12 10
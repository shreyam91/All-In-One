public class EvenNumber {

    public static boolean isPrime(int n){

        if(n <= 1){
            return false;
        }
        for(int i =2; i<= Math.sqrt(n);i++){
                if(n % i == 0){
                    return false;
                }
            }
            return true;
    }
    public static void main(String[] args) {
        int n = 5;

        // Even Number ...
        // if(n%2 == 0){
        //     System.out.println("Even");
        // }else{
        //     System.out.println("Not even");
        // }

        boolean res = isPrime(n);
        if(res == true){
            System.out.println("Prime");
        }else{
            System.out.println("Not prime");
        }
    }
}

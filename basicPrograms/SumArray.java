public class SumArray {
    static int sum(int[] arr){
        int len = arr.length;
        int sum =0;

        for( int  i=0; i<len; i++){
            sum = sum + arr[i];
        }

        return sum;
    }
    public static void main(String[] args) {
        int arr[] = {1,3,5,7,2};
        int res = sum(arr);
        System.out.println(res);
    }
}


// Question: Sum of Array Elements.... 

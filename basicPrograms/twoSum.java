public class twoSum {

    static int[] twoSum(int[] arr, int target) {

        int length = arr.length;

        for (int i = 0; i < length; i++) {
            for (int j = i + 1; j < length; j++) { 
                if (arr[i] + arr[j] == target) {
                    return new int[]{i, j}; 
                }
            }
        }
        return new int[]{-1, -1}; 
    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        int target = 6;

        int[] res = twoSum(arr, target);
        System.out.println("Indices: " + res[0] + ", " + res[1]);
    }
}

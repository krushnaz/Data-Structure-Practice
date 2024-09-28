public class binarySearch {
   static int bSearch(int size,int arr[], int element){
        int low = 0,mid,high = size-1;
        while(low <= high){
            mid = (low + high)/2;
            if(arr[mid]==element){
                return mid;
            }
            else if(arr[mid] < element){
                low = mid+1;
            }
            else{
                high = mid-1;
            }
        }
        return -1;

    }
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7,8,9};
        int size = arr.length;
        int element = 2;
        int index = bSearch(size, arr, element);
        System.out.println("the element "+ element+ " is at "+index);
    }
}

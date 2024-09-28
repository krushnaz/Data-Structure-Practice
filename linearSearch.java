public class linearSearch {
    static int lsearch(int size,int arr[],int element){
       for(int i = 0; i < size; i++){
        if(arr[i] == element){
            return i;
        }
       }
       return -1;
    }
    public static void main(String[] args) {
        
        
        int arr[] ={1,2,3,4,2,3,41,2,3};
        int size = arr.length;
        int element = 41;
        int linearSearch = lsearch(size,arr,element);
        System.out.println("the elemnt is " + element+ " found at index : "+linearSearch);
    }
}
    
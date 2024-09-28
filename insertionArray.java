import java.util.*;
class insertionArray{
    
   static void disp(int myarr,int arr[]){
        System.out.println("aaray is going to print....");
        for(int i = 0; i < myarr;i++){
            System.out.println(arr[i]);
        }
    }
  static void insertAtInd(int element,int myarr,int arr[],int index ,int size){

        for(int i = myarr -1; i >= index;i--){
           arr[i+1] = arr[i];
        }
       arr[index] = element;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size  = 10;
        int myarr = 5;
        int index;
        int element = 32;
        int arr[] = new int[size];
        System.out.println("add element in array...");
        for(int i = 0; i < myarr;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("enter index :");
        index = sc.nextInt();
        insertAtInd( element, myarr, arr, index ,size);
        myarr+=1;
        disp(myarr,arr);
        System.out.println("total size of array :"+myarr);
       
        
    }
}

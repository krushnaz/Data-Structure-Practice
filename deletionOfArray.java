import java.util.*;
public class deletionOfArray {
   static void delete(int arr[],int size,int index){
        System.out.println("element is now deleting state:");
        for(int i = index; i < size-1;i++){
            arr[i] = arr[i+1];
        }
    }
    static void disp(int arr[],int size){
        System.out.println("printing element in array :");
       for(int i= 0; i < size;i++){
        System.out.println(arr[i]);
       }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the size of array :");
        int size = sc.nextInt();
        int[] arr = new int[size];
        System.out.println("enter the element in array :");
        for(int i = 0; i < size; i++){
         arr[i] = sc.nextInt();
        }   
        System.out.println("enter index :");
        int index = sc.nextInt();

    
        delete(arr,size,index);
        size -=1;
        disp(arr, size);
    }
}

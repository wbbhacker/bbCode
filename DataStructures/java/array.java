
public class array {
  // 默认数组元素都是紧挨并排的情况
  public int[] data;
  private int len;
  private int count;
  
  public array(int capacity){
    this.data = new int[capacity];
    this.len = capacity;
    this.count = 0;
  }
  
  public int find(int index){
    if(index<0 || index >= count) return -1;
    System.out.println("find"+index);
    return data[index];
  }

  
  public boolean modify (int index, int value){
    if(index < 0 || index >= count) return false;
     data[index] = value;
     return true;
  }

  public boolean insert(int index, int value){
    if(index >= len){
      System.out.println("数组空间已满，没有可插入位置！");
      return false;
    }
  }

  public void printAll(){

    System.out.println("遍历打印数组");
    for(int i=0; i< data.length; i++ ){
      System.out.print("下标"+i+":"+data[i]+"\n");
    }
  }

  public static void main(String[] args) {
    
    array array = new array(5);
    array.printAll();
    array.modify(3,100);
    int elem = array.find(3);
    System.out.println(elem);

    // this.Array(10);
    // 读取元素
    // array = new int[]{1,2,2,3};
    // System.out.println(array[3]);
    // // 更新元素
    // array[3] = 5;
    // System.out.println(array[3]);

    // // 插入元素 
    //   //超出范围插入 尾部插入
    
    // int[] arrayTemp = new int[array.length+1];
    // for(int i=0; i<array.length; i++){
    //   arrayTemp[i] = array[i];
    // }
    // arrayTemp[array.length] = 100;
    // array = arrayTemp;

    // for(int i=0; i<array.length; i++){
    //   System.out.println(array[i]);
    // }

    // 
  }
}
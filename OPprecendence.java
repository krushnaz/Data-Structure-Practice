class OPprecendence{
    public static void main(String[] args) {
       int n = 10;
       int m = 10;
       
       int res = m ++/(++n * n --) / --m;
       System.out.println(res);
    }
}
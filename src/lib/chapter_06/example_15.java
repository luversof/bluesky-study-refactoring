// 6.11 단계 쪼개기
// 예시: 명령줄 프로그램 쪼개기(자바)
// import 처리 없이 예제 코드 부분만 표기 하였으므로 실제 동작하지는 않음

public class TestClass {
    public static void main(String[] args) {
        try {
            if (args.length == 0)
                throw new RuntimeException("파일명을 입력하세요.");
            String filename = args[args.length - 1];
            File input = Paths.get(filename).toFile();
            ObjectMapper mapper = new ObjectMapper();
            Order[] orders = mapper.readValue(input, Order[].class);
            if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
                System.out.println(Stream.of(orders)
                        .filter(o -> "ready".equals(o.status))
                        .count());
            else
                System.out.println(orders.length);
        } catch (Exception e) {
            System.err.println(e);
            System.exit(1);
        }
    }
}
// 6.11 단계 쪼개기
// 예시: 첫 번째 단계에 변환기 사용하기(자바)
// import 처리 없이 예제 코드 부분만 표기 하였으므로 실제 동작하지는 않음

public class TestClass {
    public static void main(String[] args) {
        try {
            System.out.println(run(args));
        } catch (Exception e) {
            System.err.println(e);
            System.exit(1);
        }
    }

    static long run(String[] args) throws IOException {
        if (args.length == 0)
            throw new RuntimeException("파일명을 입력하세요.");
        CommandLine commandLine = new CommandLine();
        String filename = args[args.length - 1];
        return countOrders(commandLine, args, filename);
    }

    private static long countOrders(CommandLine commandLine, String[] args, String filename) {
        File input = Paths.get(filename).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
            return Stream.of(orders)
                    .filter(o -> "ready".equals(o.status))
                    .count();
        else
            return orders.length;
    }

    private static class CommandLine {
    }
}

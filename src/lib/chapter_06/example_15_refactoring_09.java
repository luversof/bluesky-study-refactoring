// 6.11 단계 쪼개기
// 예시: 명령줄 프로그램 쪼개기(자바)
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
        return countOrders(parseCommandLine(args));
    }

    private static CommandLine parseCommandLine(String[] args) {
        if (args.length == 0)
            throw new RuntimeException("파일명을 입력하세요.");
        CommandLine result = new CommandLine();
        result.filename = args[args.length - 1];
        result.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
        return result;
    }

    private static long countOrders(CommandLine commandLine) {
        File input = Paths.get(commandLine.filename).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if (commandLine.onlyCountReady)
            return Stream.of(orders)
                    .filter(o -> "ready".equals(o.status))
                    .count();
        else
            return orders.length;
    }

    private static class CommandLine {
        boolean onlyCountReady;
        String filename;
    }
}

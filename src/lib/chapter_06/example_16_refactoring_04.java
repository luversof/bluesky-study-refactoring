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
        CommandLine commandLine = new CommandLine(args);
        return countOrders(commandLine);
    }

    private static long countOrders(CommandLine commandLine) {
        File input = Paths.get(commandLine.filename()).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if (commandLine.onlyCountReady())
            return Stream.of(orders)
                    .filter(o -> "ready".equals(o.status))
                    .count();
        else
            return orders.length;
    }

    private class CommandLine {
        String[] args;

        public CommandLine(String[] args) {
            this.args = args;
            if (args.length == 0)
                throw new RuntimeException("파일명을 입력하세요.");
        }

        String filename() {
            return args[args.length - 1];
        }

        boolean onlyCountReady() {
            return Stream.of(args).anyMatch(arg -> "-r".equals(arg));
        }
    }
}

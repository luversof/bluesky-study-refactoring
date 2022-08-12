// 11.13 예외를 사전확인으로 바꾸기
public class ResourcePool {

  public Resource get() {
    Resource result;
    if (available.isEmpty()) {
      result = Resource.create();
      allocated.add(result);
    } else {
      try {
        result = available.pop();
        allocated.add(result);
      } catch (NoSuchElementException e) {
        throw new AssertionError("도달 불가");
      }
    }
    return result;
  }

  private Deque<Resource> available;
  private List<Resource> allocated;
}
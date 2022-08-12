// 11.13 예뢰를 사전확인으로 바꾸기
public class ResourcePool {

  public Resource get() {
    Resource result;
    try {
      result = available.pop();
      allocated.add(result);
    } catch (NoSuchElementException e) {
      result = Resource.create();
      allocated.add(result);
    }
    return result;
  }

  private Deque<Resource> available;
  private List<Resource> allocated;
}
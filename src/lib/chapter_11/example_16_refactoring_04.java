// 11.13 예뢰를 사전확인으로 바꾸기
// 더 가다듬기
public class ResourcePool {

  public Resource get() {
    Resource result = available.isEmpty() ? Resource.create() : available.pop();
    allocated.add(result);
    return result;
  }

  private Deque<Resource> available;
  private List<Resource> allocated;
}
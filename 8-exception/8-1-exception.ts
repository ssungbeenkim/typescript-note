// Java: Exception
// JavaScript: Error
/* 
보통 다른 언어에서는 Eception class가 있다. 
Javascript 에서는 Error 클래스 
*/
// const array = new Array(100000000000000000);
{
  // Error(Exception) Handling: try -> catch -> finally
  function readFile(fileName: string): string {
    if (fileName === 'not exist!💩') {
      throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents🗒';
  }

  function closeFile(fileName: string) {
    //
  }
  function run() {
    const fileName = 'not exist!💩';

    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log(`catched!!`);
      return; // 파일 안에서 리턴이 되거나 예상치 못한 에러가 발생할 경우에는
    } finally {
      // finally는 무조건 실행된다.
      closeFile(fileName); // 반드시 마무리 해야 하는 것이 있다면 finally 안에서 처리해 주도록 한다.
      console.log(`closed!`);
    }
  } // 에러 핸들링을 해 주면 프로그램이 죽지는 않는다. 에러가 발생할 수 있는 곳에서는 에러핸들링을 해 주자.
  run();
}

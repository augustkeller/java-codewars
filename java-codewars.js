//Exercise 1
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//Example:
// Inputs: "abc", "bc"
// Output: true
// Inputs: "abc", "d"
// Output: false
public class Kata {
    public static boolean solution(String str, String ending) {
      if (str.length() < ending.length()) {
        return false;
      } else {      
        return str.substring(str.length() - ending.length()).equals(ending);
      }
    }
}
//Top Answer
// public class Kata {
//   public static boolean solution(String str, String ending) {
//     return str.endsWith(ending);
//   }
// }

//Exercise 2
//Make a simple function called greet that returns the most-famous "hello world!".
//Style Points
//Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of?
public class HelloWorld {
    public static String solution() {
      
    }
}
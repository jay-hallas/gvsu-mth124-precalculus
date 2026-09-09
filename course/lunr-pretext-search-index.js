var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-function-fundamentals",
  "level": "1",
  "url": "activity-function-fundamentals.html",
  "type": "Worksheet",
  "number": "",
  "title": "Activity: Function Fundamentals",
  "body": " Activity: Function Fundamentals     Function Definition and Tables   A function is a rule that assigns to each input exactly one output. The set of all possible inputs is called the domain , and the set of all corresponding outputs is called the range . Two different inputs are allowed to share an output; a single input is never allowed to have two outputs. When working in context, identifying the units of the input and output is just as important as the arithmetic.     Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      Yes, this table can represent a function. We check the inputs (the -values) to ensure that each one is assigned to exactly one output. The input maps to , and the input also maps to . It is perfectly valid for two different inputs to share the same output. Because no single input is assigned multiple different outputs, the defining rule of a function is satisfied.      Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      No, this table cannot represent a function. If we examine the inputs, we see that appears twice in the domain row. In the first instance, the input is assigned an output of . In the second instance, the same input is assigned an output of . Because a single input is mapping to two distinct outputs, this relationship violates the strict definition of a function.      Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      Yes, this table can represent a function. Every input in the top row has exactly one output associated with it. The fact that every input produces the identical output of means this represents a constant function. The definition of a function only prohibits one input from pointing to multiple outputs; it places no restriction on how many inputs can point to the same output.      Evaluating from a Table   Consider the function defined by the following table:                        Determine .   The notation tells us to find the output when the input is . Locating in the row, we read the corresponding value directly below it in the row. Therefore, .     Find all values such that .   The equation provides the output and asks us to work backwards to find the input(s). Scanning the row for the value , we see it appears twice. Reading the corresponding inputs in the top row above these values yields and .      Find all values such that . Is this the same question as finding ? Explain the difference in your own words.    Scanning the row for the output , we find it in the final column. Reading up to the input row, the corresponding input is .  This is an entirely different operation from finding . The expression puts in the input slot, meaning we start at the top of the table and read downward. The equation puts in the output slot, meaning we start at the bottom of the table and read upward to find all matching inputs.         Evaluating Symbolic Functions   To evaluate a function given by a formula, replace every occurrence of the input variable with the value you were given, wrapping negative inputs in parentheses. Then simplify one operation at a time. If the formula contains a fraction or a square root, check whether the input is even allowed before you simplify.     Let . Evaluate and show your step-by-step simplification.    First, substitute for every instance of in the formula, making sure to use parentheses around the negative value: Next, perform the multiplications in the first term and in the denominator: Simplify the denominator, then reduce the fraction: Finally, combine the terms: .      Quadratic Function Evaluation   Let .    Determine .   Substitute for and follow the order of operations, ensuring exponents are applied before multiplication:      Determine .   Substitute for , being particularly careful with the signs when squaring a negative number and when multiplying two negative values:       Rational Functions and Domain Restrictions   Let .    Determine , writing your answer as a simplified fraction.   Substitute into both the numerator and denominator:      Are there any input values that must be excluded from the domain of ? If so, list them and explain what goes wrong there.   Yes. For a rational function, any input that makes the denominator equal to zero must be excluded from the domain, because division by zero is mathematically undefined. To find these restricted values, set the denominator equal to zero and solve for : This gives the solutions and . Both of these inputs will cause division by zero, so they must be entirely excluded from the domain of .      Radical Function Evaluation    Let . Determine and .    For , substitute for : For , substitute for :       Expression Substitution    Let . Determine and simplify your answer completely. (Substitute the entire expression everywhere you see an .)    To evaluate , treat the entire quantity as a single input block and place it into every slot where an appears in the original formula: Next, expand the squared binomial carefully. A common pitfall is to write , but the correct expansion requires distributing: . Also, be sure to distribute the through the second term: Finally, combine the like terms ( and , as well as and ) to fully simplify:          Evaluating from a Graph   Consider a function defined by the piecewise linear graph below.    A piecewise linear graph made of three connected segments. It begins at (-4,-2), rises to a peak at (-2,2), drops back down to a valley at (2,-2), and rises again to end at (4,2).       Determine .   Locate the input on the horizontal axis and trace vertically to the graph. The graph passes through the point on the falling segment. The output is the -coordinate, so .     Find all values such that .   We are looking for all points where the graph is at a height of zero (meaning it intersects the -axis). Examining the grid, the graph crosses the horizontal axis at three distinct locations: midway up the first rising segment at , precisely at the origin , and midway up the final rising segment at . Therefore, the inputs are , , and .     Find all values such that .   We must locate all points on the graph that sit at a height of . Scanning horizontally across the grid at that level, the graph reaches a height of exactly twice: at the peak corner point , and at the final endpoint on the far right at . Therefore, the inputs are and .      Graphical Function Identification    Two of the graphs below represent functions and two do not. Assume the horizontal axis corresponds to inputs ( ) and the vertical axis corresponds to outputs ( ). Identify the two that are not functions, and explain how you decided.    Graph A    A cubic function curve running smoothly from bottom left to top right, passing through the origin.       Graph B    A sideways opening parabola facing to the right, passing through the x-axis at x=-2.         Graph C    A V-shaped absolute value curve opening upwards with its vertex at (0,-1).       Graph D    A circle centered at the origin with a radius of 2.          Graph B and Graph D do not represent functions. We can determine this by applying the Vertical Line Test. In a function graph, every vertical line represents a specific input , and if a line crosses the graph more than once, it means that single input is yielding multiple different outputs.  In Graph B (the sideways parabola), a vertical line drawn at will intersect the graph at two distinct points: and . Because the input has two outputs, it fails to be a function.  In Graph D (the circle), a vertical line drawn exactly on the -axis (where ) will hit the graph at both and . Again, a single input yields multiple outputs, so it is not a function.  Graphs A and C successfully pass the vertical line test. (Note for Graph C: sharp corners are entirely allowed in functions, provided there is no vertical overlap).         Functions in Context: Laptop Battery   A statement like carries three pieces of information: the input value, the output value, and the units attached to each. A good interpretation is a full sentence that mentions all three and never uses the letters , , or .  A laptop is unplugged from the wall and begins running on battery power. The remaining battery charge, (measured as a percentage), is a function of the time (measured in hours) since the laptop was unplugged. Let .    Identify the input and output variables, making sure to state their specific units.   The input variable is time , and its units are hours. The output variable is the remaining battery charge , and its units are percent.     Interpret the meaning of the statement in the context of this scenario.   Two and a half hours after the laptop was unplugged from the wall, the remaining battery charge has decreased to 40 percent.     If we were to calculate the change in battery charge divided by the change in time, what would the units of this new value be? Briefly explain what this rate represents in this context.   The units of this rate would be percent per hour (change in output units divided by change in input units). Conceptually, this rate represents the average speed at which the laptop is consuming battery power over a given time interval. Because the battery is draining, we would expect this calculated rate of change to be a negative number.      Functions in Context: Coffee Temperature   A cup of coffee is poured and left sitting on a desk. Its temperature (measured in degrees Fahrenheit) is a function of the number of minutes since it was poured. Let .    Identify the input and output variables, making sure to state their specific units.   The input variable is time , and its units are minutes. The output variable is the temperature of the coffee , and its units are degrees Fahrenheit.     Interpret the meaning of the statement in the context of this scenario.   Ten minutes after the cup of coffee was poured, it has cooled to a temperature of exactly 145 degrees Fahrenheit.      Explain what the equation is asking, and describe what a solution to that equation would tell you about the coffee. How is this different from the question in part (b)?    This equation is asking us to find the specific time (or times) at which the coffee's temperature reaches exactly 100 degrees Fahrenheit. If we were to solve the equation, the resulting number would tell us how many minutes the coffee had been sitting on the desk before it hit that temperature threshold.  The difference between this and part (b) is the direction of the evaluation. In part (b), the input time ( minutes) was provided to us, and we evaluated the function to report the output temperature. Here, the output temperature ( degrees) is the known value, and we are working backwards to solve for the unknown input time.      "
},
{
  "id": "fn-tables",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-tables",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Function Definition and Tables.",
  "body": " Function Definition and Tables   A function is a rule that assigns to each input exactly one output. The set of all possible inputs is called the domain , and the set of all corresponding outputs is called the range . Two different inputs are allowed to share an output; a single input is never allowed to have two outputs. When working in context, identifying the units of the input and output is just as important as the arithmetic.     Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      Yes, this table can represent a function. We check the inputs (the -values) to ensure that each one is assigned to exactly one output. The input maps to , and the input also maps to . It is perfectly valid for two different inputs to share the same output. Because no single input is assigned multiple different outputs, the defining rule of a function is satisfied.      Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      No, this table cannot represent a function. If we examine the inputs, we see that appears twice in the domain row. In the first instance, the input is assigned an output of . In the second instance, the same input is assigned an output of . Because a single input is mapping to two distinct outputs, this relationship violates the strict definition of a function.      Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      Yes, this table can represent a function. Every input in the top row has exactly one output associated with it. The fact that every input produces the identical output of means this represents a constant function. The definition of a function only prohibits one input from pointing to multiple outputs; it places no restriction on how many inputs can point to the same output.    "
},
{
  "id": "fn-table-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-table-evaluation",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Evaluating from a Table.",
  "body": " Evaluating from a Table   Consider the function defined by the following table:                        Determine .   The notation tells us to find the output when the input is . Locating in the row, we read the corresponding value directly below it in the row. Therefore, .     Find all values such that .   The equation provides the output and asks us to work backwards to find the input(s). Scanning the row for the value , we see it appears twice. Reading the corresponding inputs in the top row above these values yields and .      Find all values such that . Is this the same question as finding ? Explain the difference in your own words.    Scanning the row for the output , we find it in the final column. Reading up to the input row, the corresponding input is .  This is an entirely different operation from finding . The expression puts in the input slot, meaning we start at the top of the table and read downward. The equation puts in the output slot, meaning we start at the bottom of the table and read upward to find all matching inputs.    "
},
{
  "id": "fn-symbolic-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-symbolic-evaluation",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Evaluating Symbolic Functions.",
  "body": " Evaluating Symbolic Functions   To evaluate a function given by a formula, replace every occurrence of the input variable with the value you were given, wrapping negative inputs in parentheses. Then simplify one operation at a time. If the formula contains a fraction or a square root, check whether the input is even allowed before you simplify.     Let . Evaluate and show your step-by-step simplification.    First, substitute for every instance of in the formula, making sure to use parentheses around the negative value: Next, perform the multiplications in the first term and in the denominator: Simplify the denominator, then reduce the fraction: Finally, combine the terms: .    "
},
{
  "id": "fn-quadratic-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-quadratic-evaluation",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Quadratic Function Evaluation.",
  "body": " Quadratic Function Evaluation   Let .    Determine .   Substitute for and follow the order of operations, ensuring exponents are applied before multiplication:      Determine .   Substitute for , being particularly careful with the signs when squaring a negative number and when multiplying two negative values:     "
},
{
  "id": "fn-rational-domain",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-rational-domain",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Rational Functions and Domain Restrictions.",
  "body": " Rational Functions and Domain Restrictions   Let .    Determine , writing your answer as a simplified fraction.   Substitute into both the numerator and denominator:      Are there any input values that must be excluded from the domain of ? If so, list them and explain what goes wrong there.   Yes. For a rational function, any input that makes the denominator equal to zero must be excluded from the domain, because division by zero is mathematically undefined. To find these restricted values, set the denominator equal to zero and solve for : This gives the solutions and . Both of these inputs will cause division by zero, so they must be entirely excluded from the domain of .    "
},
{
  "id": "fn-radical-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-radical-evaluation",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Radical Function Evaluation.",
  "body": " Radical Function Evaluation    Let . Determine and .    For , substitute for : For , substitute for :     "
},
{
  "id": "fn-expression-substitution",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-expression-substitution",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Expression Substitution.",
  "body": " Expression Substitution    Let . Determine and simplify your answer completely. (Substitute the entire expression everywhere you see an .)    To evaluate , treat the entire quantity as a single input block and place it into every slot where an appears in the original formula: Next, expand the squared binomial carefully. A common pitfall is to write , but the correct expansion requires distributing: . Also, be sure to distribute the through the second term: Finally, combine the like terms ( and , as well as and ) to fully simplify:     "
},
{
  "id": "fn-graph-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-graph-evaluation",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Evaluating from a Graph.",
  "body": " Evaluating from a Graph   Consider a function defined by the piecewise linear graph below.    A piecewise linear graph made of three connected segments. It begins at (-4,-2), rises to a peak at (-2,2), drops back down to a valley at (2,-2), and rises again to end at (4,2).       Determine .   Locate the input on the horizontal axis and trace vertically to the graph. The graph passes through the point on the falling segment. The output is the -coordinate, so .     Find all values such that .   We are looking for all points where the graph is at a height of zero (meaning it intersects the -axis). Examining the grid, the graph crosses the horizontal axis at three distinct locations: midway up the first rising segment at , precisely at the origin , and midway up the final rising segment at . Therefore, the inputs are , , and .     Find all values such that .   We must locate all points on the graph that sit at a height of . Scanning horizontally across the grid at that level, the graph reaches a height of exactly twice: at the peak corner point , and at the final endpoint on the far right at . Therefore, the inputs are and .    "
},
{
  "id": "fn-vertical-line-test",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-vertical-line-test",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "Graphical Function Identification.",
  "body": " Graphical Function Identification    Two of the graphs below represent functions and two do not. Assume the horizontal axis corresponds to inputs ( ) and the vertical axis corresponds to outputs ( ). Identify the two that are not functions, and explain how you decided.    Graph A    A cubic function curve running smoothly from bottom left to top right, passing through the origin.       Graph B    A sideways opening parabola facing to the right, passing through the x-axis at x=-2.         Graph C    A V-shaped absolute value curve opening upwards with its vertex at (0,-1).       Graph D    A circle centered at the origin with a radius of 2.          Graph B and Graph D do not represent functions. We can determine this by applying the Vertical Line Test. In a function graph, every vertical line represents a specific input , and if a line crosses the graph more than once, it means that single input is yielding multiple different outputs.  In Graph B (the sideways parabola), a vertical line drawn at will intersect the graph at two distinct points: and . Because the input has two outputs, it fails to be a function.  In Graph D (the circle), a vertical line drawn exactly on the -axis (where ) will hit the graph at both and . Again, a single input yields multiple outputs, so it is not a function.  Graphs A and C successfully pass the vertical line test. (Note for Graph C: sharp corners are entirely allowed in functions, provided there is no vertical overlap).    "
},
{
  "id": "fn-context-battery",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-context-battery",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "Functions in Context: Laptop Battery.",
  "body": " Functions in Context: Laptop Battery   A statement like carries three pieces of information: the input value, the output value, and the units attached to each. A good interpretation is a full sentence that mentions all three and never uses the letters , , or .  A laptop is unplugged from the wall and begins running on battery power. The remaining battery charge, (measured as a percentage), is a function of the time (measured in hours) since the laptop was unplugged. Let .    Identify the input and output variables, making sure to state their specific units.   The input variable is time , and its units are hours. The output variable is the remaining battery charge , and its units are percent.     Interpret the meaning of the statement in the context of this scenario.   Two and a half hours after the laptop was unplugged from the wall, the remaining battery charge has decreased to 40 percent.     If we were to calculate the change in battery charge divided by the change in time, what would the units of this new value be? Briefly explain what this rate represents in this context.   The units of this rate would be percent per hour (change in output units divided by change in input units). Conceptually, this rate represents the average speed at which the laptop is consuming battery power over a given time interval. Because the battery is draining, we would expect this calculated rate of change to be a negative number.    "
},
{
  "id": "fn-context-coffee",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-context-coffee",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "Functions in Context: Coffee Temperature.",
  "body": " Functions in Context: Coffee Temperature   A cup of coffee is poured and left sitting on a desk. Its temperature (measured in degrees Fahrenheit) is a function of the number of minutes since it was poured. Let .    Identify the input and output variables, making sure to state their specific units.   The input variable is time , and its units are minutes. The output variable is the temperature of the coffee , and its units are degrees Fahrenheit.     Interpret the meaning of the statement in the context of this scenario.   Ten minutes after the cup of coffee was poured, it has cooled to a temperature of exactly 145 degrees Fahrenheit.      Explain what the equation is asking, and describe what a solution to that equation would tell you about the coffee. How is this different from the question in part (b)?    This equation is asking us to find the specific time (or times) at which the coffee's temperature reaches exactly 100 degrees Fahrenheit. If we were to solve the equation, the resulting number would tell us how many minutes the coffee had been sitting on the desk before it hit that temperature threshold.  The difference between this and part (b) is the direction of the evaluation. In part (b), the input time ( minutes) was provided to us, and we evaluated the function to report the output temperature. Here, the output temperature ( degrees) is the known value, and we are working backwards to solve for the unknown input time.    "
},
{
  "id": "lt-function-notation",
  "level": "1",
  "url": "lt-function-notation.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target: Function Notation",
  "body": " Learning Target: Function Notation    I can use function notation, find and simplify the output of a function given an input, and find an input that produces a given output; I can do this for functions given by a formula, a table, and a graph.      Problem 1: A Function Given by a Formula   Let .     Find .     .      Find . Show each step of your simplification.     .  The negative input has to be wrapped in parentheses before multiplying, and the denominator has to be finished off before dividing.      Find the input that produces an output of .    We are solving . Multiplying both sides by gives , so and .  The input is .      Is there an input value that this function cannot accept? If so, state it and explain what goes wrong there.    The input has to be excluded. It makes the denominator equal to zero, and division by zero is undefined.        Problem 2: A Function Given by a Table   The function is defined by the table below.                         Find and .     and .      Find all inputs for which .     and . Two different inputs are allowed to share an output, so both count.      Find all inputs for which . Then explain how this question is different from finding .     .  To find , you start in the input row at and read the output underneath it. To solve , you start in the output row at and read back every input above it.  The two questions move through the table in opposite directions, and they happen to have different answers here.      A different rule is recorded in the table below. Can this rule be a function? Why or why not?                    No. The input is assigned two different outputs, and , and a function has to assign exactly one output to each input.  The repeated output is not a problem. Nothing in the definition says two inputs cannot share an output.        Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments with corners at the points negative two, negative two and two, two.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, two to the point negative two, negative two. The second segment rises from negative two, negative two to the point two, two. The third segment falls from two, two to the point four, zero. The graph crosses the horizontal axis at negative three, at the origin, and at four.                     Find and .     and .      Find all inputs for which .     , , and . These are the three places where the graph meets the horizontal axis.      Find all inputs for which .     and . One is the left endpoint of the graph and the other is the peak in the middle.      Sketch a graph that is not a function, assuming the horizontal axis holds inputs and the vertical axis holds outputs. Mark one input on your sketch that shows why it fails.    Any graph where some vertical line hits the curve more than once will work.  A circle centered at the origin is one example. The input is paired with two outputs, one at the top of the circle and one at the bottom, so the rule does not assign exactly one output to that input.        Problem 4: Function Notation in Context   A driver leaves Grand Rapids for a trip downstate. The distance still remaining in the trip, , measured in miles, is a function of the time , measured in hours since the driver left. Write .     Identify the input and output variables, and state the units of each.    The input is the time since the driver left, measured in hours. The output is the distance remaining, measured in miles.      Explain in writing what means in this situation.    Three hours after the driver left, there are still 145 miles left in the trip.  A complete interpretation names the input value, the output value, and the units on each, without using the letters or .      Explain what the equation is asking, and describe what a solution to it would tell you about the trip. How is this different from the previous question?    It asks for the time at which the distance remaining is zero miles, so a solution is the number of hours the whole trip took.  In the previous question the input was handed to us and we reported the output. Here the output is handed to us and we solve backwards for the input.      Suppose you divide the change in by the change in over the first three hours. What units does that value carry, and what does it tell you about the drive?    The units are miles per hour. It is the average rate at which the distance remaining is changing, which is the driver's average speed over those three hours.  The value comes out negative, since the distance remaining is going down as time goes up.        Problem 5: Inputs That Are Not Numbers   Let .     Find .     .      Find and simplify completely. Substitute the entire expression everywhere an appears.     .  The common error here is writing for .      Find and simplify. Compare your result to the previous answer and explain what the comparison shows about function notation.    Since , we get .  This is not the same as . The notation means the function is applied to the single input ; it does not mean the output at and the output at get added together.  Function notation does not distribute across a sum.      "
},
{
  "id": "lt-function-notation-2",
  "level": "2",
  "url": "lt-function-notation.html#lt-function-notation-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can use function notation, find and simplify the output of a function given an input, and find an input that produces a given output; I can do this for functions given by a formula, a table, and a graph.   "
},
{
  "id": "lt-fn-formula",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-formula",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: A Function Given by a Formula.",
  "body": " Problem 1: A Function Given by a Formula   Let .     Find .     .      Find . Show each step of your simplification.     .  The negative input has to be wrapped in parentheses before multiplying, and the denominator has to be finished off before dividing.      Find the input that produces an output of .    We are solving . Multiplying both sides by gives , so and .  The input is .      Is there an input value that this function cannot accept? If so, state it and explain what goes wrong there.    The input has to be excluded. It makes the denominator equal to zero, and division by zero is undefined.    "
},
{
  "id": "lt-fn-table",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-table",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: A Function Given by a Table.",
  "body": " Problem 2: A Function Given by a Table   The function is defined by the table below.                         Find and .     and .      Find all inputs for which .     and . Two different inputs are allowed to share an output, so both count.      Find all inputs for which . Then explain how this question is different from finding .     .  To find , you start in the input row at and read the output underneath it. To solve , you start in the output row at and read back every input above it.  The two questions move through the table in opposite directions, and they happen to have different answers here.      A different rule is recorded in the table below. Can this rule be a function? Why or why not?                    No. The input is assigned two different outputs, and , and a function has to assign exactly one output to each input.  The repeated output is not a problem. Nothing in the definition says two inputs cannot share an output.    "
},
{
  "id": "lt-fn-graph",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-graph",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: A Function Given by a Graph.",
  "body": " Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments with corners at the points negative two, negative two and two, two.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, two to the point negative two, negative two. The second segment rises from negative two, negative two to the point two, two. The third segment falls from two, two to the point four, zero. The graph crosses the horizontal axis at negative three, at the origin, and at four.                     Find and .     and .      Find all inputs for which .     , , and . These are the three places where the graph meets the horizontal axis.      Find all inputs for which .     and . One is the left endpoint of the graph and the other is the peak in the middle.      Sketch a graph that is not a function, assuming the horizontal axis holds inputs and the vertical axis holds outputs. Mark one input on your sketch that shows why it fails.    Any graph where some vertical line hits the curve more than once will work.  A circle centered at the origin is one example. The input is paired with two outputs, one at the top of the circle and one at the bottom, so the rule does not assign exactly one output to that input.    "
},
{
  "id": "lt-fn-context",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-context",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Function Notation in Context.",
  "body": " Problem 4: Function Notation in Context   A driver leaves Grand Rapids for a trip downstate. The distance still remaining in the trip, , measured in miles, is a function of the time , measured in hours since the driver left. Write .     Identify the input and output variables, and state the units of each.    The input is the time since the driver left, measured in hours. The output is the distance remaining, measured in miles.      Explain in writing what means in this situation.    Three hours after the driver left, there are still 145 miles left in the trip.  A complete interpretation names the input value, the output value, and the units on each, without using the letters or .      Explain what the equation is asking, and describe what a solution to it would tell you about the trip. How is this different from the previous question?    It asks for the time at which the distance remaining is zero miles, so a solution is the number of hours the whole trip took.  In the previous question the input was handed to us and we reported the output. Here the output is handed to us and we solve backwards for the input.      Suppose you divide the change in by the change in over the first three hours. What units does that value carry, and what does it tell you about the drive?    The units are miles per hour. It is the average rate at which the distance remaining is changing, which is the driver's average speed over those three hours.  The value comes out negative, since the distance remaining is going down as time goes up.    "
},
{
  "id": "lt-fn-expression-input",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-expression-input",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Inputs That Are Not Numbers.",
  "body": " Problem 5: Inputs That Are Not Numbers   Let .     Find .     .      Find and simplify completely. Substitute the entire expression everywhere an appears.     .  The common error here is writing for .      Find and simplify. Compare your result to the previous answer and explain what the comparison shows about function notation.    Since , we get .  This is not the same as . The notation means the function is applied to the single input ; it does not mean the output at and the output at get added together.  Function notation does not distribute across a sum.    "
},
{
  "id": "lt-average-rate-of-change",
  "level": "1",
  "url": "lt-average-rate-of-change.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target: Average Rate of Change",
  "body": " Learning Target: Average Rate of Change    I can find the average rate of change in a function on a given interval and state the units and interpret the meaning of the average rate of change in applied contexts.      Problem 1: Functions Given by a Formula   Find the average rate of change of each function on the given interval. Show the endpoint outputs before you divide.     Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is . The output drops by an average of units for each unit increase in the input across this interval.      Find the average rate of change of on the interval .    Evaluate at the endpoints, watching the signs on the negative input.   The average rate of change is .      Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is .        Problem 2: A Function Given by a Table   A sugarbush collects maple sap during a run in early spring. Let be the total number of gallons of sap collected hours after tapping began.    (hours)         (gallons)            Find the average rate of change of on the interval , and state its units.    Read the two endpoint columns, and .   The average rate of change is gallons per hour. The column at never entered the computation.      Describe the meaning of your answer in the context of this situation. Write a full sentence that does not use the letters or .    Between and hours after tapping began, the sugarbush collected an average of gallons of sap each hour.      Find the average rate of change of on the interval . Was the sap running faster during this stretch or during the earlier one? Explain how you can tell.    Using and :   The sap ran faster during the later stretch, gallons per hour compared with gallons per hour earlier. Both rates are positive, so the larger number is the faster one here.        Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments that falls, then runs flat, then rises.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, three to the point negative one, negative three. The second segment is horizontal, running from negative one, negative three to the point one, negative three. The third segment rises from one, negative three to the point four, three.                     Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval . Explain what your answer says about the outputs at the two endpoints, and why it does not mean the function was flat across the whole interval.    Reading the graph, and .   An average rate of change of means the output ended up at the same height it started at. It says nothing about what happened in between; the graph dropped all the way down to and climbed back. Only the two endpoints go into the computation.        Problem 4: Average Rate of Change in Context   A ball is thrown straight up from the ground. Its height in feet after seconds is given by .     Find the average rate of change of on , and state its units.    Evaluate at the endpoints.   The average rate of change is feet per second.      Describe in words what your answer means. Your sentence should mention the ball, the time, and the direction it is moving.    During the first second after the throw, the ball rose an average of feet each second, so its average velocity over that stretch was feet per second upward.      Find the average rate of change of on . Explain what the sign of this answer tells you, and how the ball's motion on this interval differs from its motion on .    Evaluate at the endpoints.   The average rate of change is feet per second. The negative sign says the height decreased across this interval, so the ball was falling here while it was rising on . It has passed the top of its flight and is on its way back to the ground.        Problem 5: Working Backwards from a Rate   A candle is lit and burns steadily. Let be the height of the candle in centimeters, minutes after it was lit. The average rate of change of on the interval is .     What are the units of this average rate of change?    Centimeters per minute. The units are always the output units divided by the input units.      Interpret the meaning of in this context. Write a full sentence that does not use the letters or .    Between and minutes after the candle was lit, its height dropped by an average of centimeters each minute.      How much shorter was the candle at minutes than it was at minutes? Explain how you got your answer from the rate.    The interval is minutes long, and the candle lost centimeters per minute on average, so the total change in height was centimeters.  The candle was centimeters shorter at minutes than at minutes. This reverses the usual computation: instead of dividing the change in output by the change in input, we multiplied the rate by the length of the interval to recover the change in output.      "
},
{
  "id": "lt-average-rate-of-change-2",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-average-rate-of-change-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can find the average rate of change in a function on a given interval and state the units and interpret the meaning of the average rate of change in applied contexts.   "
},
{
  "id": "lt-aroc-formulas",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-formulas",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Functions Given by a Formula.",
  "body": " Problem 1: Functions Given by a Formula   Find the average rate of change of each function on the given interval. Show the endpoint outputs before you divide.     Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is . The output drops by an average of units for each unit increase in the input across this interval.      Find the average rate of change of on the interval .    Evaluate at the endpoints, watching the signs on the negative input.   The average rate of change is .      Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is .    "
},
{
  "id": "lt-aroc-table",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-table",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: A Function Given by a Table.",
  "body": " Problem 2: A Function Given by a Table   A sugarbush collects maple sap during a run in early spring. Let be the total number of gallons of sap collected hours after tapping began.    (hours)         (gallons)            Find the average rate of change of on the interval , and state its units.    Read the two endpoint columns, and .   The average rate of change is gallons per hour. The column at never entered the computation.      Describe the meaning of your answer in the context of this situation. Write a full sentence that does not use the letters or .    Between and hours after tapping began, the sugarbush collected an average of gallons of sap each hour.      Find the average rate of change of on the interval . Was the sap running faster during this stretch or during the earlier one? Explain how you can tell.    Using and :   The sap ran faster during the later stretch, gallons per hour compared with gallons per hour earlier. Both rates are positive, so the larger number is the faster one here.    "
},
{
  "id": "lt-aroc-graph",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-graph",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: A Function Given by a Graph.",
  "body": " Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments that falls, then runs flat, then rises.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, three to the point negative one, negative three. The second segment is horizontal, running from negative one, negative three to the point one, negative three. The third segment rises from one, negative three to the point four, three.                     Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval . Explain what your answer says about the outputs at the two endpoints, and why it does not mean the function was flat across the whole interval.    Reading the graph, and .   An average rate of change of means the output ended up at the same height it started at. It says nothing about what happened in between; the graph dropped all the way down to and climbed back. Only the two endpoints go into the computation.    "
},
{
  "id": "lt-aroc-context",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-context",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Average Rate of Change in Context.",
  "body": " Problem 4: Average Rate of Change in Context   A ball is thrown straight up from the ground. Its height in feet after seconds is given by .     Find the average rate of change of on , and state its units.    Evaluate at the endpoints.   The average rate of change is feet per second.      Describe in words what your answer means. Your sentence should mention the ball, the time, and the direction it is moving.    During the first second after the throw, the ball rose an average of feet each second, so its average velocity over that stretch was feet per second upward.      Find the average rate of change of on . Explain what the sign of this answer tells you, and how the ball's motion on this interval differs from its motion on .    Evaluate at the endpoints.   The average rate of change is feet per second. The negative sign says the height decreased across this interval, so the ball was falling here while it was rising on . It has passed the top of its flight and is on its way back to the ground.    "
},
{
  "id": "lt-aroc-interpret",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-interpret",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Working Backwards from a Rate.",
  "body": " Problem 5: Working Backwards from a Rate   A candle is lit and burns steadily. Let be the height of the candle in centimeters, minutes after it was lit. The average rate of change of on the interval is .     What are the units of this average rate of change?    Centimeters per minute. The units are always the output units divided by the input units.      Interpret the meaning of in this context. Write a full sentence that does not use the letters or .    Between and minutes after the candle was lit, its height dropped by an average of centimeters each minute.      How much shorter was the candle at minutes than it was at minutes? Explain how you got your answer from the rate.    The interval is minutes long, and the candle lost centimeters per minute on average, so the total change in height was centimeters.  The candle was centimeters shorter at minutes than at minutes. This reverses the usual computation: instead of dividing the change in output by the change in input, we multiplied the rate by the length of the interval to recover the change in output.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

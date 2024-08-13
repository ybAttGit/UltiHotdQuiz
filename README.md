# Welcome to House of the dragon ultimate quiz tool

## How to use?
Create your questions in the format of:
```
Q:Which one of these targeryans did not ride balerion?
Viserys
Aegon
[V]Aemond
Maegor

Q:Who is the queen that never was
[V]Rhaenys
Rhenyra
Alicent
Helena
```
Where q is the question, next lines are answers with the one with a [V] before is the correct one.
Save this data to quiz-text.txt
```
Run npm run start
```
Replace the contents in quiz.html of the variable questions to the results saved in quiz.json.<br/>
Open the quiz.html in your browser.<br/>
You have 3 lives, and will get points for each correct answer. <br/>
The game will end when you run out of lives or run out of questions.<br/>
You'll earn additional points for each consecutive correct answer, with the bonus increasing for every correct answer in your streak.
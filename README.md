# Lecture 2: Learning

## Introduction

What makes a man different from machines? Not just the thought but also the **Learning**. We learn from our mistakes and past experience. We have to make our neural network do the same. Technically this process is called as **Model Training**

## How does our system learn?

### How does a human learn?

We learn from our past experience. This is the usual reply we get if we ask anyone. But if you look closly, it is an answer to "Where do we lean from?". So what is the answer to "How does a human learn?". The answer is

1. We iterate through the past data (experience).
2. We change our way of thought.
3. We change the importance given to input.
4. We change our base knowledge.
5. We reiterate through the past data to verify if our thought process is correct.

Once this is done we are ready to face real world scenario.

Is it too hard to understand? Don't worry, we will understand this using a smiple example before applying this logic to our Kingdom.

### Example

How do we do a math home work in our school days?

1. We go through the class work problems to see how they are solved (past experience).
2. We understand how to approach a problem (thought).
3. We focus more on the important points in each question (importance).
4. We update our base knowledge (eg: addition has to be done for these kind of problems, subtraction will not give the answer, etc).
5. We try the home work problem.

### How does a system learn?

Now it's time to implement how we learn on a dumb guy(machine) who only understands 0 and 1, just joking. As you saw above, there are three parts where we can make the system learn.

1. Activation function (Thought)
2. Weight (Importance)
3. Bias (Base knowledge)

For our simplicity, let's assume that we cannot change the thought process. So we are left with two, Weight and Bias. Let's play around with it to make our system learn something.

Same as the Thought function, learning is also a function. We need Weight learning and Bias learning. This leads to two learning functions. For now I'll give both the learning functions directly. We will learn more about this learning function in the upcoming lectures. Is there a technical term for this function? Yes, it is called an **Optimizer**.

**Mistake**

```
mistake = calculated value - actual value
```

**Weight Learning**

```
new weight = old weight - (mistake x input)
```

**Knowledge Learning**

```
new knowledge = old knowledge - mistake
```

During the learning process these values will be calculated at each iteration and then used in the next iteration. This continues for all the data available in the past data set.

## Model

If you have noticed, I never used the term **Model** in my previous lecture. But now our system has become a model and the definition explains the reason.

> An AI model is a computer program that learns patterns from data so it can make predictions or decisions on its own.

In the previous lecture, we had a computer program that does prediction but it didn't have the ability to learn from the past experience. But now we have the ability to learn too. Also note that the computer program is called a model even before the training process. Finally! we have an **AI Model.**

## Terminology

1. **Model Training:** The process of making a model learn from the past data.
2. **Optimizer:** It is the function used to update the Weight and Bias during the learning process.
3. **Training data set:** The past data used for training.

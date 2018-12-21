# Understanding the behave

Behave is a framework for Behaviour testing. Means, how application behaving in certain situations. In TDD we do write tests first and write logic to satisfy the tests and you'll keep on increasing the logic to achieve the desired functionality.

Using behave we can define flow/behaviour of application. It is simple and we can define the flow in english language.

# Requirements

1. Make sure you've downloaded the chromedriver
2. Python2.7 or Python3.5
3. pip or pip3

# Basic building blocks of behave

- `given`
- `when`
- `then`

### given

- initializes the state

### when

- describes an action

### then

- expected outcome

<br>
Example - 1:

```
    Scenario: Login with Valid Credentials
      Given valid credentials
      When clicks on login
      Then should be able to see Home
```

Example - 2:

```
    Scenario: Login with Valid Credentials
      Given Navigate to Login Page
      And provide valid credentials
      When clicks on login
      Then should be able to see Home
```

Example - 3:

```
    Scenario: Login with Valid Credentials
      Given Navigate to Login Page
      And provide valid credentials
      When clicks on login
      Then should be able to see Home
      And should see last login time stamp
```

Example - 4:

```
    Scenario: Login with Valid Credentials as non-admin user
      Given Navigate to Login Page
      And provide valid credentials
      When clicks on login
      Then should be able to see Home
      And should see last login time stamp
      But should not see settings menu
```

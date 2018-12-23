# Creating your react app

Its simple and zero configuration with `create-react-app`

    create-react-app <app_name>

    Example:

    create-react-app react-app

So what it does actually?

- It does create project structure for us
- It does install polyfills for us (which helps to convert ES6/7/8 to ES5)
- It does install webpack (bundling tool) (react-scripts)
- It does install development server

Well, thats cool. So this means no configuration is required to get started?

Yes, correct.

Hold on, I don't want to rely on this cli and my project is big. so, want to create on myself. Can I do that?

Absolutely, you've that flexibility

    npm run eject

The above command will remove all the default configuration

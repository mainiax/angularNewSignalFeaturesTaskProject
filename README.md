# Mini Task Manager with Angular Signals

A reactive, standalone task manager built with Angular’s new Signals API.**

---

🧩 Table of Contents

1. [About](#about)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Screenshots](#screenshots)
5. [Getting Started](#getting-started)
6. [Usage Examples](#usage-examples)
7. [How It Works](#how-it-works)
8. [Project Structure](#project-structure)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

---

🐣 About

Over the course of this mini project, I designed and implemented a fully-functional task manager using only Angular’s Signals API—no RxJS subscriptions, no external state libraries. I built:
>
> * **Stateful Services with `signal` & `effect`**: Created a `TaskService` that holds all tasks in a `WritableSignal<Task[]>` and automatically persists every change to localStorage via an Angular `effect`.
> * **Dynamic, Computed Views**: Exposed a `computed` signal in `TasksComponent` that filters tasks by user ID, giving real-time, reactive lists without manual subscription or change detection hacks.
> * **Standalone & NgModule Components**: Seamlessly integrated both standalone and classic NgModule components (forms, cards, lists) to demonstrate flexibility in modern Angular architecture.
> * **Reactive Forms Integration**: Built a `TaskFormComponent` powered by Angular’s `FormGroup`/`FormControl` APIs, emitting typed `FormGroup` events as signals so the parent can immediately append new tasks.
> * **Clean, Modular Design**: Kept presentation, state management, and persistence concerns strictly separated—making it trivial to swap out the storage layer or add new computed views (e.g. overdue tasks, priority buckets).

This project not only sharpened my understanding of Angular’s reactivity model, it also demonstrates maintainable, high-performance SPA development with the latest framework innovations—perfect for showcasing to recruiters.

---

## 🛠 Tech Stack

* Angular v17.1.2
* TypeScript
* Angular Signals (`signal`, `computed`, `effect`)
* Reactive Forms
* LocalStorage API

---

## 🚀 Features

* **Reactive State** using Angular Signals
* **Computed Filters** per-user task lists
* **LocalStorage Persistence** with automatic sync via `effect`
* **Standalone Components** for modularity
* **Reactive Forms** for task creation
* **Separation of Concerns** between UI, state, and persistence

---

📸 Screenshots

Add screenshots inside `src/assets/screenshots/`, then reference here:

![image](https://github.com/user-attachments/assets/11f1a997-8df3-4538-874f-90cdab6d69b8)

![image](https://github.com/user-attachments/assets/ebbbcf5a-5f7f-4b99-aa37-c0ac53f41f4f)

![image](https://github.com/user-attachments/assets/1955ef54-0b7f-47ed-981f-23a237601aff)

---

## 🏁 Getting Started

### Essentials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## 🎬 Usage Examples

```ts
// Defining a tasks signal
private tasks = signal<Task[]>([]);

// Creating a computed filtered view
readonly userTasks = computed(() =>
  this.tasks().filter(t => t.userId === this.currentUserId())
);

// Persisting changes
effect(() => {
  localStorage.setItem('tasks', JSON.stringify(this.tasks()));
});
```

> favorite snippets around `signal`, `computed`, and `effect`.

---

## 🔍 How It Works

1. **Signals** hold mutable state without RxJS—simplifying change detection.
2. **Computed** derives read-only, reactive slices (e.g. filtered lists).
3. **Effect** runs side-effects (e.g. syncing to LocalStorage) when signals change.
4. **Standalone Components** and classic NgModule integration enable flexible bundling and tree-shaking.

---

## 📁 Project Structure

```plain
src/
├── app/
│   ├── tasks/
│   │   ├── task.service.ts
│   │   ├── task/
│   │   ├── task-form/
│   │   └── tasks.component.ts
│   ├── ui/
│   │   └── card/
│   ├── header-component/
│   └── app.component.ts
└── assets/
    └── screenshots/
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Submit a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

Your Name • [@your-twitter](https://twitter.com/your-handle) • [your.email@example.com](mailto:your.email@example.com)
[Repo](https://github.com/your-username/your-repo)

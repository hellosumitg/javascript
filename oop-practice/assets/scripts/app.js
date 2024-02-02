class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true); // making a deep clone
    element.replaceWith(clonedElement); // replace the element with itself (i.e cloned one) and create a brand new one.
    // In this way we ditch any existing event listeners and they can be garbage collected,
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

// Creating below class for Practicing Inheritance
class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  // show() {
  //   console.log('The tooltip...');
  // }
  constructor(closeNotifierFunction) {
    // super('active-projects', true);
    super();
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }

  closeTooltip = () => {
    // inefficient way because this arrow function is now recreated for every instance of tooltip but for this App this will work fine
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = 'DUMMY!';
    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const tooltip = new Tooltip(() => {
      this.hasActiveTooltip = false;
    });
    // tooltip.show();
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn); // So this always clears any existing event listeners
    // and makes sure we only add a new one thereafter and we don't accumulate event listeners over time.
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type); // calling the event listener
  }
}

class ProjectList {
  projects = []; // Public class field
  // And they are converted to properties after any super constructor method but before other constructor logic runs.

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    // console.log(prjItems);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  // We need to call `addProject()` from inside the `projectList` but in another instance
  // So here we use a callback function.
  addProject(project) {
    // console.log(this);
    // console.log(project);
    this.projects.push(project); // we moved from the array in instance A(i.e Active Projects) to the array in instance B(i.e Finished Projects)
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // 1st way:-
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    
    // console.log(projectId);
    // console.log(this.projects.find((p) => p.id === projectId));
    
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    // shorter alternative or 2nd way:-
    this.projects = this.projects.filter((p) => p.id !== projectId); // creating a new array and removing the selected `projectId` by equating it to `projectId` present in the above `projects` array
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList) // using `bind(finishedProjectsList)` here otherwise it will take this as default which is `switchHandler` here in this case
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList) // using `bind(finishedProjectsList)` here otherwise it will take this as default which is `switchHandler` here in this case
    );
  }
}

App.init();

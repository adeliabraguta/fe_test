function onClickTab(event) {
    const tabsNavigationItemActive = document.querySelectorAll('.tab__navigation__item--active')
    const tabComponentsItemActive = document.querySelectorAll('.tab__components__item--active');
    if (event.target.classList.contains('tab__navigation__item')) {
        tabsNavigationItemActive.forEach((tab) => {
            tab.classList.remove('tab__navigation__item--active')
        })
        event.target.classList.add("tab__navigation__item--active")

        tabComponentsItemActive.forEach((component) => {
            component.classList.remove('tab__components__item--active')
        })
        const targetComponentId = event.target.getAttribute('data-tab-target');
        const targetComponent = document.getElementById(targetComponentId);
        if (targetComponent) {
            targetComponent.classList.add('tab__components__item--active');
        }
    }
}

const tabNavigation = document.querySelector(".tab__navigation")
tabNavigation.addEventListener("click", onClickTab)


function findBestMatch(k, arr) {
    return arr.reduce((acc, curr) => {
        return Math.abs(curr - k) < Math.abs(acc - k) ? curr : acc
    })
}

console.log(findBestMatch(-7, [7, -5, -4, 56, 43]))
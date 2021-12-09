React life cycle phases:

1/ mounting phase
2/update phase
3/ unmounting phase
4/ erorr handellig phases

1/when an instance first time created and isterted into the dom we use method called componentDidMount also render and constructor are run in teh same time, constructor should not contanine any fetching data from server, render should not be used to update state

2/ when acompnent get updated by change one or more of its state props, render componentDidUpdate(prevProps, preState)

3/ when a compnent deleted or removes from the dom, componentWilUnmount

4/ when a component detect an error occured during the rendering componentDidCatch(err,info)

const squareCollect = function (connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
      };
};

export {squareCollect};
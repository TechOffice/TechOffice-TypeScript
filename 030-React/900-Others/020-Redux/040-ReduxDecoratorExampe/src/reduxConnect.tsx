import { connect } from "react-redux";

export function reduxConnect(mapStateToProps, mapDispatchToProps) {
    return function (target) {
        return (connect(mapStateToProps, mapDispatchToProps)(target) as any);    
    }
}
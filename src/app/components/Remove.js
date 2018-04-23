import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        removeArticle: article => dispatch(removeArticle(article));
    }
}
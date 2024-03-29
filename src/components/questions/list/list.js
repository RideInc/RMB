import React from 'react';
import {
  QuestionData,
  removeQuestion,
  findId,
  findCountById,
  addedInNEW,
  addBookmark,
  alignToFitScreen } from '../../../service/question-data.js';

import {
  setCategory,
  setQuestion,
  editQuestion,
  addNewQuestion,
  update,
  confirm,
  change_base } from '../../actions';

import { connect } from 'react-redux';

const List = (props) => {

  const currentCategory = findCountById(props.state[0]);
  let content;

  const delQuestion = (id) => {
    let link = id;
    if (props.state[0] === 1111) {
      link = id + Math.pow(10,12)
      if (QuestionData[0].length === 2) {
        props.update();
      } else props.setCategory(findId(currentCategory))
    }   else props.setCategory(findId(currentCategory))
    removeQuestion(findCountById(link), findCountById(link, false))
    addedInNEW();
    addBookmark();
    props.change_base(1);
  }

  const checkOnDisabled = (e, func) => {
    let obj = e.target.classList
    for (let key in obj) {
      if (obj[key] === 'disabled') {
        return null
      }
    }
    func();
  }

  const removeFromBookmarks = (id) => {
    const link = id + Math.pow(10,11)
    addBookmark(link)
    if (QuestionData[1].length === 1) {
      props.update();
    } else {
      props.setCategory(findId(currentCategory))
    }
    props.change_base(1);
  }

  if (!currentCategory) {
    content = (
      <li className="list-group-item item">
        <p className="empty">Select a category of questions</p>
      </li>
    )
  };

  if (currentCategory !== null) {

    const search = (items, term) => {
      try {
        // console.log(document.getElementById('question-list'))
        document.getElementById('question-list').style.overflow = ''
      } catch(e) {
        console.log(e)
      }
      if (term.length === 0) return items;
      document.getElementById('question-list').style.overflow = 'hidden'
      return items.filter((item, i) => {
        if (i !== 0) return item.question
                                .toLowerCase()
                                .indexOf(term.toLowerCase()) > -1;
        return null
      })
    }

    const term = props.state[8]
    let visibleItems = search(QuestionData[currentCategory], term);

    if (document.getElementById('question-list')) {
      if (visibleItems.length > 11) {
        document.getElementById('question-list').style.overflow = ''
      }
    }


    if (QuestionData[currentCategory] !== undefined) {
      content = visibleItems.map((item, i) => {

        let { question } = visibleItems[i];


        if (visibleItems[i].question === undefined) return null

        if (String(visibleItems[i].question).length > 30) {
          question = String(visibleItems[i].question).substring(0,30) + '...';
        }

        const categoryId = props.state[0]

        //if (categoryId === 1111) {
          //const questionLink = findCountById(item.id + Math.pow(10,12))
          //const categoryName = QuestionData[questionLink][0].name
        //}

        let button = (
            <button
              type="button"

              onClick={ (e) => checkOnDisabled(e,
                        ( ) => props.confirm(delQuestion,
                                              id, 'del_question')) }

              className={`btn btn-secondary list`}>
              <i className={`far fa-trash-alt`}></i>
            </button>
        );

        if (categoryId === 2222) button = (
          <button
             type="button"
             onClick={ () => removeFromBookmarks(id) }
             className={`btn btn-secondary list`}>
             <i className={`fas fa-times`}></i>
          </button>
        )

        const { id } = item
        return (
          <li key={ id }
            className="list-group-item item">
            <p onClick={ () => props.onSelectQuestion(id) }>
              { question }
            </p>
            <button
               type="button"
               onClick={ (e) => checkOnDisabled(e, () => props.editQuestion(id)) }
               className={`btn btn-secondary list`}>
               <i className={`far fa-edit`}></i>
            </button>
            { button }
          </li>
        )
      })

    };

    if (props.state[0] === null) {
      content = (
        <li className="list-group-item item">
          <p className="empty">
            Select a category of questions
          </p>
        </li>
      )
    }

    if (props.state[0] !== null) {
      if (QuestionData[currentCategory].length === 1)
      content = (
        <li className="list-group-item item">
          <p onClick={ () => props.addNewQuestion() }
            className="empty">+ Add Question
          </p>
        </li>
      )
    }
  }

  let scroll = 'disabled'

  if(props.state[0] !== null) {
    const { length } = QuestionData[currentCategory]
    if (length >= alignToFitScreen('width')) scroll = ''
    if (length >= alignToFitScreen('height')) scroll = ''
  }

  return (
    <div id="question-list" className={`list ${ scroll }`}>
      { content }
    </div>
  );

};

const mapStateToProps = (state) => ({ state: state })
const mapDispatchToProps = (dispatch) => {
  return{
    setCategory: (id) => dispatch(setCategory(id)),
    onSelectQuestion: (id) => dispatch(setQuestion(id)),
    editQuestion: (id) => dispatch(editQuestion(id)),
    addNewQuestion: () => dispatch(addNewQuestion()),
    update: () => dispatch(update()),
    confirm: (func, id, type) => dispatch(confirm(func, id, type)),
    change_base: (change) => dispatch(change_base(change))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);

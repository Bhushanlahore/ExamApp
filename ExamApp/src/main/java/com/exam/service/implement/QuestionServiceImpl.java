package com.exam.service.implement;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.repository.QuestionRepository;
import com.exam.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{

	 @Autowired
	 private QuestionRepository questionRepository;

	    @Override
	    public Question addQuestion(Question question) {
	        return this.questionRepository.save(question);
	    }

	    @Override
	    public Question updateQuestion(Question question) {
	        return this.questionRepository.save(question);
	    }

	    @Override
	    public Set<Question> getQuestions() {
	        return new HashSet<>(this.questionRepository.findAll());
	    }

	    @Override
	    public Question getQuestion(Long questionId) {
	        return this.questionRepository.findById(questionId).get();
	    }

	    @Override
	    public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
	        return this.questionRepository.findByQuiz(quiz);
	    }

		@Override
		public void deleteQuestion(Long quesId) {
			// TODO Auto-generated method stub
			Question question = new Question();
			question.setQuesId(quesId);
			this.questionRepository.delete(question);
			
		}


	
	}

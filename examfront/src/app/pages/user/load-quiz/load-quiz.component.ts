import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId:any;
  quizzes:any;

  constructor(private _route:ActivatedRoute,private _quiz:QuizService, private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.catId = this._route.snapshot.params['catId'];
  
    this._route.params.subscribe((params:any)=>{
      console.log(params);
      this.catId = params.catId;

      if(this.catId==0){
        console.log("all quizes");
        this._quiz.quizzes().subscribe((data:any)=>
        {
          this.quizzes = data;
          console.log(this.quizzes);
        },
    (error:any)=>{
      console.log(error);
      this._snack.open('Error while loading quiz','',{
        duration:3000,
      });
    }    
  );
      }else{
        console.log('Load specific quiz');
        this._quiz.getQuizzesOfCategory(this.catId).subscribe((data:any)=>{
          this.quizzes=data;
        },
        (error:any)=>{
          alert('error in laoding quiz');
        }
        );
      }

    });
   
  }

}

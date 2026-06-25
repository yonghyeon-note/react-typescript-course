import { type PropsWithChildren } from 'react';
// import { type FC, type PropsWithChildren } from 'react';  // FC 타입을 사용할 경우

type CourseGoalProps = PropsWithChildren<{ title: string }>;

/***** function 키워드 함수 방법 *****/
export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}


/***** 화살표 함수 방법 1 *****/
// const CourseGoal = ({ title, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };
// export default CourseGoal;


/***** 화살표 함수 방법 2 *****/
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };
// export default CourseGoal;

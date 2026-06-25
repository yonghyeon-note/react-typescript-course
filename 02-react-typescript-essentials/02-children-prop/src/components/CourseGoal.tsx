// import { type ReactNode } from 'react';       // interface 키워드를 사용할 경우
import { type PropsWithChildren } from 'react';  // type 키워드를 사용할 경우

/***** interface 키워드 방법 *****/
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

/***** type 키워드 방법 *****/
type CourseGoalProps = PropsWithChildren<{ title: string }>;

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

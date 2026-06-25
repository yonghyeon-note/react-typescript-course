/***** type 키워드 방법 *****/
// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

/***** interface 키워드 방법 *****/
interface CourseGoalProps {
  title: string;
  description: string;
}

export default function CourseGoal({ title, description }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}

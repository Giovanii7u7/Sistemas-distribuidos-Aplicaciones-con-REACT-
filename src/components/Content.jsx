import Part from './Part'

const Content = (props) => {
  return (
    <div>
      <Part partName={props.part1} exercises={props.exercises1} />
      <Part partName={props.part2} exercises={props.exercises2} />
      <Part partName={props.part3} exercises={props.exercises3} />
    </div>
  )
}

export default Content

import Part from './Part'

const Content = (props) => {
  return (
    <div>
      <Part partName={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part partName={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part partName={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

export default Content
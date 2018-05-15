import React, { Component }  from "react";
import "./ChatList.css";
import { List as RVList, AutoSizer } from "react-virtualized";
import avatar from "./avatar.png";
import { List,Image } from "semantic-ui-react";


class ChatList extends Component {


rowRenderer=({key,index,style})=>{

{this.props.chats.map(chat => {

                      return(
                      <div>
                      <List.Item>
                      <Image avatar src='avatar.png' />
                      <List.Content>
                      <List.Header as='a'>{chat.username}</List.Header>
                    <List.Description>{chat.message}</List.Description>
                   </List.Content>
    </List.Item>
                  </div>
                  )
              })}


}

render() {
    return (

         <div>
 <AutoSizer>
      {
      ({ width, height }) => {
 <RVList width={width} 
         height={height}
            rowHeight={50}
            rowCount={this.props.chats.length}
            rowRenderer={this.rowRenderer} 
	/>
}
}
</AutoSizer>
       </div>
            );
  }

}

export default ChatList;

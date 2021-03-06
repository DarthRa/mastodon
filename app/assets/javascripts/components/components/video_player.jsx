import ImmutablePropTypes from 'react-immutable-proptypes';
import PureRenderMixin    from 'react-addons-pure-render-mixin';
import IconButton         from './icon_button';

const VideoPlayer = React.createClass({
  propTypes: {
    media: ImmutablePropTypes.map.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      width: 196,
      height: 110
    };
  },

  getInitialState () {
    return {
      muted: true
    };
  },

  mixins: [PureRenderMixin],

  handleClick () {
    this.setState({ muted: !this.state.muted });
  },

  render () {
    return (
      <div style={{ cursor: 'default', marginTop: '8px', overflow: 'hidden', width: `${this.props.width}px`, height: `${this.props.height}px`, boxSizing: 'border-box', background: '#000', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px', opacity: '0.8' }}><IconButton title='Toggle sound' icon={this.state.muted ? 'volume-up' : 'volume-off'} onClick={this.handleClick} /></div>
        <video src={this.props.media.get('url')} autoPlay='true' loop={true} muted={this.state.muted} style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }

});

export default VideoPlayer;

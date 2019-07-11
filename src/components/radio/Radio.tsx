import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface RadioProps {
    defaultChecked: PropTypes.bool, //默认是否选中
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool //是否可用
}

class Radio extends React.Component<RadioProps, {}> {
    constructor(props: RadioProps) {
        super(props);
      }
    private rcRadio: any;

    saveRadio = (node:any) => {
        this.rcRadio = node;
    }
    
    render() {
        const { className, children, disabled, defaultChecked} = this.props;

        const classString = classNames(className, 'react-ui-radio', {
            'radio-disabled': disabled
          }); 
        return (
            <label class={classString}>
                <input type="radio" defaultChecked={defaultChecked} 
                    disabled={disabled} 
                    ref={this.saveRadio}/>
                {children !== undefined && <span>{children}</span>}
            </label>
        )
    }
}

export default Radio;
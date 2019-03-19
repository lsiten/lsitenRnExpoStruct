import React, { Component, createRef } from "react";
import { WebView as RNWebView, StyleSheet, Platform } from "react-native";
import renderChart from './renderChart';

const changeData = data => `changeData(${JSON.stringify(data)});`;

const source = Platform.select({
  ios: require("./f2chart.html"),
  android: { uri: "file:///android_asset/f2chart.html" }
  // android: require("./f2chart.html")
});

type Props = {
  data?: Array<Object>,
  width: String,
  height: String,
  onChange?: Function,
  webView?: any
};

export default class Chart extends Component<Props> {
  static defaultProps = {
    onChange: () => {},
    data: [],
    width: '100%',
    height: '400',
    webView: RNWebView
  };

  constructor(props) {
    super(props);
    this.chart = createRef();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = this.props;
    if (data !== nextProps.data) {
      this.update(nextProps.data);
    }
  }

  update = data => {
    this.chart.current.injectJavaScript(changeData(data));
  };

  // repaint = script => this.chart.current.injectJavaScript(script);

  onMessage = event => {
    const {
      nativeEvent: { data }
    } = event;
    const { onChange } = this.props;
    const tooltip = JSON.parse(data);
    onChange(tooltip);
  };

  render() {
    const {
      webView: WebView,
      data
    } = this.props;
    console.log(11111111111, source)
    return (
      <WebView
        javaScriptEnabled
        ref={this.chart}
        scrollEnabled={false}
        style={styles.webView}
        injectedJavaScript={renderChart(this.props, data)}
        source={source}
        originWhitelist={["*"]}
        onMessage={this.onMessage}
      />
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: "transparent"
  }
});

'use strict';
import PropTypes from 'prop-types';
// Object.defineProperty(exports, "__esModule", {
//   value: true
// });

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowCompare = require('react-addons-shallow-compare');

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

var _pokemonGif = require('../../pokemon-gif');

var _pokemonGif2 = _interopRequireDefault(_pokemonGif);

var _pokedexNumberToName = require('pokemon-gif/lib/pokedex-number-to-name');

var _pokedexNumberToName2 = _interopRequireDefault(_pokedexNumberToName);

var _pokemonPropType = require('./pokemon-prop-type');

var _pokemonPropType2 = _interopRequireDefault(_pokemonPropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokemonGif = function (_Component) {
  _inherits(PokemonGif, _Component);

  function PokemonGif() {
    _classCallCheck(this, PokemonGif);

    return _possibleConstructorReturn(this, (PokemonGif.__proto__ || Object.getPrototypeOf(PokemonGif)).apply(this, arguments));
  }

  _createClass(PokemonGif, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _shallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          pokemon = _props.pokemon,
          height = _props.height,
          className = _props.className;

      var name = typeof pokemon === 'string' ? pokemon.toLowerCase() : _pokedexNumberToName2.default[pokemon];

      return _react2.default.createElement('img', {
        alt: name,
        className: className,
        src: (0, _pokemonGif2.default)(name),
        height: height + 'px'
      });
    }
  }]);

  return PokemonGif;
}(_react.Component);

PokemonGif.defaultProps = {
  className: '',
  height: 50
};

PokemonGif.propTypes = {
  pokemon: _pokemonPropType2.default.isRequired,
  className: PropTypes.string,
  height: PropTypes.number
};

export default PokemonGif;
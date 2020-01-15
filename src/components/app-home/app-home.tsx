import { Component, h } from '@stencil/core';
import { tsConfigPathsAliasWorksText } from '~/tsconfig-paths-test'
console.log(tsConfigPathsAliasWorksText)

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>{tsConfigPathsAliasWorksText}</p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}

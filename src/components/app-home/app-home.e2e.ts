import { newE2EPage } from '@stencil/core/testing';
import { tsConfigPathsAliasWorksText } from '~/tsconfig-paths-test'

describe('app-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home');
    expect(element).toHaveClass('hydrated');

    const tsConfigTestEl = await element.find('ts-config-path-filled');
    expect(tsConfigTestEl.textContent).toEqualText(tsConfigPathsAliasWorksText)
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});

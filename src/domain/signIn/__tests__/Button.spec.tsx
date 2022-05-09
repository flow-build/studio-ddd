import "@testing-library/jest-dom";

import Button from "~/domain/signIn/components/Button";
import { render } from "~/domain/signIn/utils/test-utils";

describe("[Button]", () => {
    test("Renders without crash", () => {
        render(<Button />);
        expect(true).toBeTruthy();
    });
});
